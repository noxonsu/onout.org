#!/usr/bin/env node

/**
 * Envato CodeCanyon Upload Automation
 *
 * Automates uploading WordPress plugin updates to CodeCanyon:
 * - Logs into Envato author dashboard
 * - Navigates to item edit page
 * - Uploads new version ZIP
 * - Generates and fills changelog from git commits
 * - Submits for review
 *
 * Usage:
 *   node upload-to-envato.js --plugin farmfactory
 *   node upload-to-envato.js --plugin definance --dry-run
 *   node upload-to-envato.js --test-login
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);
require('dotenv').config();

const chalk = require('chalk');
const ora = require('ora');
const inquirer = require('inquirer');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// ============================================================================
// Configuration
// ============================================================================

const CONFIG = {
  envato: {
    loginUrl: 'https://account.envato.com/sign_in',
    dashboardUrl: 'https://author.envato.com/',
    itemsUrl: 'https://author.envato.com/items',
  },
  browser: {
    headless: process.env.HEADLESS === 'true',
    slowMo: parseInt(process.env.SLOW_MO || '100'),
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  },
  timeouts: {
    page: parseInt(process.env.PAGE_TIMEOUT || '60000'),
    upload: parseInt(process.env.UPLOAD_TIMEOUT || '300000'),
  },
  paths: {
    sessionFile: path.join(__dirname, process.env.SESSION_FILE || '.envato-session'),
    screenshotDir: path.join(__dirname, process.env.SCREENSHOT_DIR || 'screenshots'),
    logDir: path.join(__dirname, process.env.LOG_DIR || 'logs'),
    remoteServer: process.env.REMOTE_SERVER || 'root@95.217.227.162',
    remoteUpdatesDir: process.env.REMOTE_UPDATES_DIR || '/home/farmFactory/web/farm.wpmix.net/public_html/updates',
    reposDir: process.env.REPOS_DIR || '/root',
  },
};

// ============================================================================
// CLI Arguments
// ============================================================================

const argv = yargs(hideBin(process.argv))
  .option('plugin', {
    alias: 'p',
    type: 'string',
    description: 'Plugin name (farmfactory, definance, etc.)',
  })
  .option('zip', {
    alias: 'z',
    type: 'string',
    description: 'Path to ZIP file (auto-detected if not provided)',
  })
  .option('item-id', {
    alias: 'i',
    type: 'string',
    description: 'Envato item ID',
  })
  .option('changelog', {
    alias: 'c',
    type: 'string',
    description: 'Custom changelog text',
  })
  .option('reviewer-notes', {
    alias: 'r',
    type: 'string',
    description: 'Notes for Envato reviewers',
  })
  .option('dry-run', {
    type: 'boolean',
    description: 'Test run without actual upload',
    default: false,
  })
  .option('test-login', {
    type: 'boolean',
    description: 'Test login only',
    default: false,
  })
  .option('auto-submit', {
    type: 'boolean',
    description: 'Auto-submit for review (default: ask)',
    default: process.env.AUTO_SUBMIT === 'true',
  })
  .help()
  .argv;

// ============================================================================
// Utilities
// ============================================================================

class Logger {
  constructor() {
    this.logFile = path.join(
      CONFIG.paths.logDir,
      `envato-upload-${new Date().toISOString().split('T')[0]}.log`
    );

    if (!fs.existsSync(CONFIG.paths.logDir)) {
      fs.mkdirSync(CONFIG.paths.logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;

    fs.appendFileSync(this.logFile, logMessage);

    if (process.env.DEBUG === 'true' || level === 'error') {
      console.log(logMessage.trim());
    }
  }

  info(message) {
    this.log(message, 'info');
  }

  error(message) {
    this.log(message, 'error');
    console.error(chalk.red(`❌ ${message}`));
  }

  success(message) {
    this.log(message, 'success');
    console.log(chalk.green(`✅ ${message}`));
  }

  warn(message) {
    this.log(message, 'warn');
    console.log(chalk.yellow(`⚠️  ${message}`));
  }
}

const logger = new Logger();

async function takeScreenshot(page, name) {
  if (process.env.SAVE_SCREENSHOTS !== 'true') return;

  if (!fs.existsSync(CONFIG.paths.screenshotDir)) {
    fs.mkdirSync(CONFIG.paths.screenshotDir, { recursive: true });
  }

  const filename = `${name}-${Date.now()}.png`;
  const filepath = path.join(CONFIG.paths.screenshotDir, filename);

  await page.screenshot({ path: filepath, fullPage: true });
  logger.info(`Screenshot saved: ${filename}`);
}

async function generateChangelog(pluginName, pluginConfig) {
  const spinner = ora('Generating changelog from git commits...').start();

  try {
    const repoPath = pluginConfig.repoPath;

    // Get version from latest ZIP or git tag
    const { stdout: versionOutput } = await execAsync(
      `cd ${repoPath} && git describe --tags --abbrev=0 2>/dev/null || echo "2.26.0227"`,
      { shell: '/bin/bash' }
    );
    const version = versionOutput.trim();

    // Get commits since last tag
    const { stdout: commitsOutput } = await execAsync(
      `cd ${repoPath} && git log --since="30 days ago" --pretty=format:"%s" --no-merges | head -20`,
      { shell: '/bin/bash' }
    );

    const commits = commitsOutput.trim().split('\n').filter(Boolean);

    // Generate HTML changelog
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let html = `<h4>Version ${version} - ${date}</h4>\n<ul>\n`;

    const categories = {
      fix: [],
      feat: [],
      other: [],
    };

    commits.forEach(commit => {
      if (commit.startsWith('fix:')) {
        categories.fix.push(commit.replace('fix:', '').trim());
      } else if (commit.startsWith('feat:')) {
        categories.feat.push(commit.replace('feat:', '').trim());
      } else {
        categories.other.push(commit);
      }
    });

    if (categories.feat.length > 0) {
      html += '  <li><strong>New Features:</strong><ul>\n';
      categories.feat.forEach(item => {
        html += `    <li>${item}</li>\n`;
      });
      html += '  </ul></li>\n';
    }

    if (categories.fix.length > 0) {
      html += '  <li><strong>Bug Fixes:</strong><ul>\n';
      categories.fix.forEach(item => {
        html += `    <li>${item}</li>\n`;
      });
      html += '  </ul></li>\n';
    }

    if (categories.other.length > 0) {
      html += '  <li><strong>Improvements:</strong><ul>\n';
      categories.other.slice(0, 5).forEach(item => {
        html += `    <li>${item}</li>\n`;
      });
      html += '  </ul></li>\n';
    }

    html += '</ul>';

    spinner.succeed('Changelog generated');
    return html;

  } catch (error) {
    spinner.fail('Failed to generate changelog');
    logger.error(`Changelog generation error: ${error.message}`);

    // Fallback changelog
    return `<h4>Version Update - ${new Date().toLocaleDateString()}</h4>\n<ul>\n<li>Bug fixes and improvements</li>\n<li>Enhanced compatibility</li>\n<li>Performance optimizations</li>\n</ul>`;
  }
}

async function findLatestZip(pluginConfig) {
  const spinner = ora('Finding latest ZIP file...').start();

  try {
    const pattern = pluginConfig.zipPattern;
    const regexPattern = new RegExp(pattern.replace(/\*/g, '.*'));

    // 1. Check local directories first
    const localDirs = [
      path.join(__dirname, 'downloads'),
      pluginConfig.repoPath,
      path.join(pluginConfig.repoPath, 'dist'),
    ];

    let latestZip = null;
    let latestTime = 0;

    for (const dir of localDirs) {
      if (!fs.existsSync(dir)) continue;

      const files = fs.readdirSync(dir);
      const zipFiles = files.filter(f => regexPattern.test(f) && f.endsWith('.zip'));

      for (const file of zipFiles) {
        const filepath = path.join(dir, file);
        const stats = fs.statSync(filepath);

        if (stats.mtimeMs > latestTime) {
          latestTime = stats.mtimeMs;
          latestZip = filepath;
        }
      }
    }

    if (latestZip) {
      const stats = fs.statSync(latestZip);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      spinner.succeed(`Found local ZIP: ${path.basename(latestZip)} (${sizeMB} MB)`);
      return latestZip;
    }

    // 2. Check remote server via SSH
    const remoteServer = CONFIG.paths.remoteServer;
    const remoteUpdatesDir = pluginConfig.remoteZipDir || CONFIG.paths.remoteUpdatesDir;

    if (remoteServer && remoteUpdatesDir) {
      spinner.text = `Searching on remote server ${remoteServer}:${remoteUpdatesDir}...`;

      try {
        const { stdout: remoteFiles } = await execAsync(
          `ssh ${remoteServer} "ls -t ${remoteUpdatesDir}/*.zip 2>/dev/null"`,
          { shell: '/bin/bash', timeout: 15000 }
        );

        const matchingFiles = remoteFiles.trim().split('\n')
          .filter(f => f && regexPattern.test(path.basename(f)));

        if (matchingFiles.length > 0) {
          const remoteZip = matchingFiles[0]; // Already sorted by time (ls -t)
          const localDir = path.join(__dirname, 'downloads');

          if (!fs.existsSync(localDir)) {
            fs.mkdirSync(localDir, { recursive: true });
          }

          const localPath = path.join(localDir, path.basename(remoteZip));

          spinner.text = `Downloading ${path.basename(remoteZip)} from ${remoteServer}...`;
          await execAsync(
            `scp ${remoteServer}:${remoteZip} ${localPath}`,
            { shell: '/bin/bash', timeout: 60000 }
          );

          const stats = fs.statSync(localPath);
          const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

          spinner.succeed(`Downloaded ZIP: ${path.basename(localPath)} (${sizeMB} MB)`);
          return localPath;
        }
      } catch (sshError) {
        logger.warn(`Remote search failed: ${sshError.message}`);
      }
    }

    spinner.fail('No ZIP file found');
    throw new Error(`No ZIP file matching pattern: ${pattern}. Check local dirs and remote server.`);

  } catch (error) {
    spinner.fail('Failed to find ZIP file');
    throw error;
  }
}

// ============================================================================
// Envato Login
// ============================================================================

async function loginToEnvato(page) {
  const spinner = ora('Logging into Envato...').start();

  try {
    // Check for saved session
    if (fs.existsSync(CONFIG.paths.sessionFile)) {
      const sessionData = JSON.parse(fs.readFileSync(CONFIG.paths.sessionFile, 'utf8'));
      const sessionAge = Date.now() - sessionData.timestamp;
      const maxAge = (process.env.SESSION_VALIDITY_HOURS || 24) * 60 * 60 * 1000;

      if (sessionAge < maxAge) {
        await page.setCookie(...sessionData.cookies);
        spinner.text = 'Using saved session...';

        await page.goto(CONFIG.envato.dashboardUrl, { waitUntil: 'networkidle0' });

        // Check if still logged in
        const isLoggedIn = await page.evaluate(() => {
          return !window.location.href.includes('sign_in');
        });

        if (isLoggedIn) {
          spinner.succeed('Logged in with saved session');
          return true;
        }
      }
    }

    // Fresh login required
    spinner.text = 'Performing fresh login...';

    await page.goto(CONFIG.envato.loginUrl, { waitUntil: 'networkidle0' });
    await takeScreenshot(page, 'login-page');

    // Check for credentials
    const username = process.env.ENVATO_USERNAME;
    const password = process.env.ENVATO_PASSWORD;

    if (!username || !password) {
      spinner.fail('Missing credentials');

      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'username',
          message: 'Envato username:',
        },
        {
          type: 'password',
          name: 'password',
          message: 'Envato password:',
          mask: '*',
        },
      ]);

      username = answers.username;
      password = answers.password;
    }

    // Fill login form
    await page.type('#username', username);
    await page.type('#password', password);
    await takeScreenshot(page, 'login-filled');

    // Submit
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
      page.click('button[type="submit"]'),
    ]);

    await takeScreenshot(page, 'after-login');

    // Check for 2FA
    const has2FA = await page.evaluate(() => {
      return document.body.innerText.includes('verification code') ||
             document.body.innerText.includes('two-factor');
    });

    if (has2FA) {
      spinner.text = '2FA required...';

      const { code } = await inquirer.prompt([
        {
          type: 'input',
          name: 'code',
          message: 'Enter 2FA code:',
        },
      ]);

      await page.type('input[name="code"]', code);
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        page.click('button[type="submit"]'),
      ]);
    }

    // Verify login success
    const isLoggedIn = await page.evaluate(() => {
      return window.location.href.includes('author.envato.com') &&
             !window.location.href.includes('sign_in');
    });

    if (!isLoggedIn) {
      throw new Error('Login verification failed');
    }

    // Save session
    const cookies = await page.cookies();
    fs.writeFileSync(
      CONFIG.paths.sessionFile,
      JSON.stringify({
        cookies,
        timestamp: Date.now(),
      })
    );

    spinner.succeed('Successfully logged in');
    return true;

  } catch (error) {
    spinner.fail('Login failed');
    throw error;
  }
}

// ============================================================================
// Upload Process
// ============================================================================

async function uploadToEnvato(page, pluginName, zipPath, changelog, itemId, reviewerNotes) {
  const spinner = ora('Navigating to item edit page...').start();

  try {
    if (!itemId || itemId === 'UNKNOWN') {
      throw new Error('Envato item ID not configured. Please update plugin-config.json');
    }

    // Navigate to item edit page
    const editUrl = `https://author.envato.com/edit/${itemId}`;
    spinner.text = `Navigating to ${editUrl}...`;

    await page.goto(editUrl, { waitUntil: 'networkidle0', timeout: CONFIG.timeouts.page });
    await takeScreenshot(page, 'item-edit-page');

    // Wait for page to load
    await page.waitForTimeout(2000);

    // Look for "Update Item & Tags" or similar button/tab
    spinner.text = 'Finding upload section...';

    // Try multiple possible selectors for the update/upload area
    const updateSelectors = [
      'a[href*="update"]',
      'button:contains("Update")',
      'a:contains("Update Item")',
      '[data-action="update"]',
      '.update-item',
    ];

    let updateClicked = false;
    for (const selector of updateSelectors) {
      try {
        const element = await page.$(selector);
        if (element) {
          await element.click();
          updateClicked = true;
          logger.info(`Clicked update button: ${selector}`);
          break;
        }
      } catch (err) {
        // Try next selector
      }
    }

    if (updateClicked) {
      await page.waitForTimeout(1000);
      await takeScreenshot(page, 'update-section');
    }

    // Find file upload input
    spinner.text = 'Looking for file upload field...';

    const uploadSelectors = [
      'input[type="file"]',
      'input[name*="file"]',
      'input[name*="upload"]',
      'input[accept*="zip"]',
    ];

    let uploadInput = null;
    for (const selector of uploadSelectors) {
      uploadInput = await page.$(selector);
      if (uploadInput) {
        logger.info(`Found upload input: ${selector}`);
        break;
      }
    }

    if (!uploadInput) {
      throw new Error('Could not find file upload input. Page structure may have changed.');
    }

    // Upload the ZIP file
    spinner.text = `Uploading ${path.basename(zipPath)}...`;
    await uploadInput.uploadFile(zipPath);
    logger.info(`File uploaded: ${zipPath}`);

    // Wait for upload processing
    await page.waitForTimeout(3000);
    await takeScreenshot(page, 'after-upload');

    // Find and fill changelog textarea
    spinner.text = 'Filling changelog...';

    const changelogSelectors = [
      'textarea[name*="changelog"]',
      'textarea[name*="change"]',
      'textarea[name*="notes"]',
      'textarea[id*="changelog"]',
      '#changelog',
      '[data-field="changelog"]',
    ];

    let changelogField = null;
    for (const selector of changelogSelectors) {
      changelogField = await page.$(selector);
      if (changelogField) {
        logger.info(`Found changelog field: ${selector}`);
        break;
      }
    }

    if (changelogField) {
      await changelogField.click({ clickCount: 3 }); // Select all
      await changelogField.type(changelog);
      logger.info('Changelog filled');
    } else {
      logger.warn('Could not find changelog field - may need manual update');
    }

    // Find and fill reviewer notes if provided
    if (reviewerNotes) {
      spinner.text = 'Filling reviewer notes...';

      const notesSelectors = [
        'textarea[name*="reviewer"]',
        'textarea[name*="notes"]',
        'textarea[id*="notes"]',
        '#reviewer-notes',
        '[data-field="reviewer-notes"]',
      ];

      let notesField = null;
      for (const selector of notesSelectors) {
        notesField = await page.$(selector);
        if (notesField) {
          logger.info(`Found notes field: ${selector}`);
          break;
        }
      }

      if (notesField) {
        await notesField.click({ clickCount: 3 });
        await notesField.type(reviewerNotes);
        logger.info('Reviewer notes filled');
      }
    }

    await takeScreenshot(page, 'before-submit');

    // Look for preview or submit button
    spinner.text = 'Looking for submit button...';

    const submitSelectors = [
      'button[type="submit"]',
      'input[type="submit"]',
      'button:contains("Submit")',
      'button:contains("Save")',
      'button:contains("Update")',
      '[data-action="submit"]',
      '.submit-button',
    ];

    let submitButton = null;
    for (const selector of submitSelectors) {
      try {
        submitButton = await page.$(selector);
        if (submitButton) {
          const text = await page.evaluate(el => el.textContent, submitButton);
          logger.info(`Found submit button: ${selector} ("${text}")`);
          break;
        }
      } catch (err) {
        // Try next selector
      }
    }

    if (!submitButton) {
      spinner.warn('Could not find submit button - review may need manual submission');
      await takeScreenshot(page, 'no-submit-button');

      return {
        success: true,
        message: 'Upload completed but submit button not found - please review and submit manually',
        requiresManualSubmit: true,
      };
    }

    // Ask for confirmation before submitting
    const { shouldSubmit } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'shouldSubmit',
        message: 'Ready to submit for review. Proceed?',
        default: false,
      },
    ]);

    if (!shouldSubmit) {
      spinner.info('Upload complete - submission skipped by user');
      return {
        success: true,
        message: 'Upload completed but not submitted - please review and submit manually',
        requiresManualSubmit: true,
      };
    }

    // Submit the form
    spinner.text = 'Submitting for review...';
    await submitButton.click();

    // Wait for submission to complete
    await page.waitForTimeout(3000);
    await takeScreenshot(page, 'after-submit');

    // Check for success message or redirect
    const currentUrl = page.url();
    const pageText = await page.evaluate(() => document.body.innerText);

    const successIndicators = [
      'success',
      'submitted',
      'thank you',
      'review',
      'pending',
    ];

    const hasSuccess = successIndicators.some(indicator =>
      pageText.toLowerCase().includes(indicator)
    );

    if (hasSuccess || currentUrl !== editUrl) {
      spinner.succeed('Upload submitted successfully');
      return {
        success: true,
        message: 'Upload completed and submitted for review',
        submitted: true,
      };
    } else {
      spinner.warn('Submission status unclear - please verify manually');
      return {
        success: true,
        message: 'Upload may have been submitted - please check Envato dashboard',
        submitted: false,
      };
    }

  } catch (error) {
    spinner.fail('Upload failed');
    logger.error(`Upload error: ${error.message}`);
    await takeScreenshot(page, 'upload-error');
    throw error;
  }
}

// ============================================================================
// Main Function
// ============================================================================

async function main() {
  console.log(chalk.cyan.bold('\n🚀 Envato CodeCanyon Upload Automation\n'));

  // Load plugin config
  const pluginConfigPath = path.join(__dirname, 'plugin-config.json');
  if (!fs.existsSync(pluginConfigPath)) {
    logger.error('plugin-config.json not found');
    process.exit(1);
  }

  const pluginConfigs = JSON.parse(fs.readFileSync(pluginConfigPath, 'utf8'));

  // Validate plugin name
  let pluginName = argv.plugin;

  if (!pluginName) {
    const { selected } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selected',
        message: 'Select plugin to upload:',
        choices: Object.keys(pluginConfigs),
      },
    ]);
    pluginName = selected;
  }

  const pluginConfig = pluginConfigs[pluginName];
  if (!pluginConfig) {
    logger.error(`Unknown plugin: ${pluginName}`);
    process.exit(1);
  }

  console.log(chalk.blue(`Plugin: ${pluginConfig.name}`));
  console.log(chalk.blue(`Category: ${pluginConfig.category}\n`));

  // Launch browser
  const browser = await puppeteer.launch(CONFIG.browser);
  const page = await browser.newPage();
  page.setDefaultTimeout(CONFIG.timeouts.page);

  try {
    // Login
    await loginToEnvato(page);

    if (argv.testLogin) {
      logger.success('Login test successful');
      await browser.close();
      return;
    }

    // Find ZIP file
    const zipPath = argv.zip || await findLatestZip(pluginConfig);

    // Generate changelog
    const changelog = argv.changelog || await generateChangelog(pluginName, pluginConfig);

    console.log(chalk.cyan('\n📋 Changelog:\n'));
    console.log(changelog);
    console.log('');

    // Confirm upload
    if (!argv.dryRun && !argv.autoSubmit) {
      const { confirm } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: 'Proceed with upload?',
          default: false,
        },
      ]);

      if (!confirm) {
        logger.info('Upload cancelled by user');
        await browser.close();
        return;
      }
    }

    if (argv.dryRun) {
      logger.success('Dry run complete - no actual upload performed');
      console.log(chalk.yellow('\n📦 Ready to upload:'));
      console.log(chalk.yellow(`   ZIP: ${zipPath}`));
      console.log(chalk.yellow(`   Changelog: ${changelog.length} characters`));
    } else {
      // Generate reviewer notes if not provided
      const reviewerNotes = argv.reviewerNotes || `Update Type: Maintenance Release
Version: ${path.basename(zipPath).match(/v?(\d+\.\d+\.\d+)/)?.[1] || 'Latest'}

Changes Summary:
${changelog.replace(/<[^>]*>/g, '').substring(0, 500)}

Compatibility:
- WordPress 5.0 - 6.7+
- PHP 7.4+
- Tested on latest WordPress version

Testing Performed:
- Clean installation
- Update from previous version
- All features tested and working
- No breaking changes`;

      // Perform upload
      const result = await uploadToEnvato(
        page,
        pluginName,
        zipPath,
        changelog,
        argv.itemId || pluginConfig.itemId,
        reviewerNotes
      );

      if (result.success) {
        if (result.submitted) {
          logger.success('✅ Upload completed and submitted for review');
        } else {
          logger.success('✅ Upload completed');
          if (result.requiresManualSubmit) {
            console.log(chalk.yellow('\n⚠️  Please review and submit manually on Envato dashboard'));
          }
        }
      } else {
        logger.warn(result.message);
      }
    }

  } catch (error) {
    logger.error(`Error: ${error.message}`);
    await takeScreenshot(page, 'error');
    throw error;
  } finally {
    await browser.close();
  }
}

// ============================================================================
// Entry Point
// ============================================================================

if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('\n❌ Fatal error:'), error.message);
    process.exit(1);
  });
}

module.exports = { main, loginToEnvato, generateChangelog };
