#!/usr/bin/env node

/**
 * List Envato Items - Helper script to find item IDs
 *
 * This script logs into Envato and lists all your items with their IDs.
 * Use the IDs to update plugin-config.json
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const chalk = require('chalk');
const ora = require('ora');

// Import login function from main script
const { loginToEnvato } = require('./upload-to-envato.js');

const CONFIG = {
  browser: {
    headless: process.env.HEADLESS === 'true',
    slowMo: parseInt(process.env.SLOW_MO || '100'),
  },
  envato: {
    itemsUrl: 'https://author.envato.com/items',
  },
};

async function listEnvatoItems() {
  console.log(chalk.cyan.bold('\n📋 Envato Items List\n'));

  const browser = await puppeteer.launch(CONFIG.browser);
  const page = await browser.newPage();

  try {
    // Login using shared function
    await loginToEnvato(page);

    // Navigate to items page
    const spinner = ora('Loading items list...').start();
    await page.goto(CONFIG.envato.itemsUrl, { waitUntil: 'networkidle0' });

    // Wait for items to load
    await page.waitForTimeout(2000);

    // Extract items information
    const items = await page.evaluate(() => {
      const results = [];

      // Try multiple possible selectors for item cards/rows
      const itemElements = document.querySelectorAll(
        '.item-card, .item-row, [data-item-id], a[href*="/edit/"]'
      );

      itemElements.forEach(el => {
        // Try to find item ID from href
        const editLink = el.querySelector('a[href*="/edit/"]') || el;
        const href = editLink.getAttribute('href');

        if (href) {
          const match = href.match(/\/edit\/(\d+)/);
          if (match) {
            const itemId = match[1];

            // Try to find item name/title
            const titleEl = el.querySelector('h3, h4, .title, .item-title') ||
                          el.querySelector('a');
            const title = titleEl ? titleEl.textContent.trim() : 'Unknown';

            // Try to find category
            const categoryEl = el.querySelector('.category, .item-category');
            const category = categoryEl ? categoryEl.textContent.trim() : '';

            results.push({
              id: itemId,
              title,
              category,
              editUrl: `https://author.envato.com/edit/${itemId}`,
            });
          }
        }
      });

      return results;
    });

    spinner.stop();

    if (items.length === 0) {
      console.log(chalk.yellow('\n⚠️  No items found'));
      console.log(chalk.gray('Page structure may have changed. Check the browser window.\n'));
    } else {
      console.log(chalk.green(`\n✅ Found ${items.length} items:\n`));

      items.forEach((item, index) => {
        console.log(chalk.bold(`${index + 1}. ${item.title}`));
        console.log(chalk.gray(`   ID: ${item.id}`));
        if (item.category) {
          console.log(chalk.gray(`   Category: ${item.category}`));
        }
        console.log(chalk.gray(`   Edit URL: ${item.editUrl}\n`));
      });

      // Save to JSON for easy reference
      const outputPath = path.join(__dirname, 'envato-items.json');
      fs.writeFileSync(outputPath, JSON.stringify(items, null, 2));
      console.log(chalk.cyan(`📄 Saved to: ${outputPath}\n`));

      // Show mapping suggestions
      console.log(chalk.cyan('💡 Update plugin-config.json with these IDs:\n'));
      items.forEach(item => {
        const lowerTitle = item.title.toLowerCase();

        let suggestedKey = null;
        if (lowerTitle.includes('farm')) suggestedKey = 'farmfactory';
        else if (lowerTitle.includes('defi')) suggestedKey = 'definance';
        else if (lowerTitle.includes('dao')) suggestedKey = 'daofactory';
        else if (lowerTitle.includes('lottery')) suggestedKey = 'lotteryfactory';
        else if (lowerTitle.includes('wallet') || lowerTitle.includes('currency'))
          suggestedKey = 'multicurrencywallet';

        if (suggestedKey) {
          console.log(chalk.gray(`"${suggestedKey}": { "itemId": "${item.id}" }`));
        }
      });
      console.log('');
    }

  } catch (error) {
    console.error(chalk.red('\n❌ Error:'), error.message);
    throw error;
  } finally {
    if (!CONFIG.browser.headless) {
      console.log(chalk.yellow('\nBrowser window left open for manual inspection.'));
      console.log(chalk.yellow('Press Ctrl+C to close when done.\n'));
      await new Promise(() => {}); // Keep alive
    } else {
      await browser.close();
    }
  }
}

if (require.main === module) {
  listEnvatoItems().catch(error => {
    console.error(chalk.red('\n❌ Fatal error:'), error.message);
    process.exit(1);
  });
}

module.exports = { listEnvatoItems };
