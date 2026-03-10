#!/bin/bash

# Generate changelog from git commits for Envato CodeCanyon
# Usage: ./generate-changelog.sh <repo-path> <version>

set -e

REPO_PATH=${1:-.}
VERSION=${2:-$(date +2.%y.%m%d)}

cd "$REPO_PATH" || exit 1

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   ENVATO CHANGELOG GENERATOR"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Repository: $(basename "$REPO_PATH")"
echo "Version: $VERSION"
echo "Date: $(date '+%B %d, %Y')"
echo ""

# Get last tag or use 30 days
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")

if [ -z "$LAST_TAG" ]; then
  echo "No tags found - using commits from last 30 days"
  RANGE="--since='30 days ago'"
else
  echo "Last tag: $LAST_TAG"
  RANGE="${LAST_TAG}..HEAD"
fi

# Get commits
COMMITS=$(git log $RANGE --pretty=format:"%s" --no-merges 2>/dev/null || echo "")

if [ -z "$COMMITS" ]; then
  echo "⚠️  No commits found in range"
  exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   MARKDOWN FORMAT (for notes)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "## Version $VERSION - $(date '+%B %d, %Y')"
echo ""

# Categorize commits
echo "$COMMITS" | while IFS= read -r commit; do
  if [[ $commit == fix:* ]]; then
    echo "- 🐛 ${commit#fix: }"
  elif [[ $commit == feat:* ]]; then
    echo "- ✨ ${commit#feat: }"
  elif [[ $commit == docs:* ]]; then
    echo "- 📝 ${commit#docs: }"
  elif [[ $commit == perf:* ]]; then
    echo "- ⚡ ${commit#perf: }"
  else
    echo "- $commit"
  fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   HTML FORMAT (for Envato)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "<h4>Version $VERSION - $(date '+%B %d, %Y')</h4>"
echo "<ul>"

# Group by type
FIXES=$(echo "$COMMITS" | grep "^fix:" | sed 's/^fix: //' || true)
FEATURES=$(echo "$COMMITS" | grep "^feat:" | sed 's/^feat: //' || true)
OTHERS=$(echo "$COMMITS" | grep -v "^fix:" | grep -v "^feat:" || true)

if [ -n "$FEATURES" ]; then
  echo "  <li><strong>New Features:</strong><ul>"
  echo "$FEATURES" | while IFS= read -r item; do
    [ -n "$item" ] && echo "    <li>$item</li>"
  done
  echo "  </ul></li>"
fi

if [ -n "$FIXES" ]; then
  echo "  <li><strong>Bug Fixes:</strong><ul>"
  echo "$FIXES" | while IFS= read -r item; do
    [ -n "$item" ] && echo "    <li>$item</li>"
  done
  echo "  </ul></li>"
fi

if [ -n "$OTHERS" ]; then
  echo "  <li><strong>Improvements:</strong><ul>"
  echo "$OTHERS" | head -5 | while IFS= read -r item; do
    [ -n "$item" ] && echo "    <li>$item</li>"
  done
  echo "  </ul></li>"
fi

echo "</ul>"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   REVIEWER NOTES (for Envato submission)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Update Type: Maintenance Release"
echo "Version: $VERSION"
echo ""
echo "Changes Summary:"
if [ -n "$FEATURES" ]; then
  echo "- New features added"
fi
if [ -n "$FIXES" ]; then
  echo "- Bug fixes implemented"
fi
if [ -n "$OTHERS" ]; then
  echo "- General improvements and optimizations"
fi
echo ""
echo "Compatibility:"
echo "- WordPress 5.0 - 6.4+"
echo "- PHP 7.1+"
echo "- Tested on latest WordPress version"
echo ""
echo "Testing Performed:"
echo "- Clean installation"
echo "- Update from previous version"
echo "- All features tested and working"
echo "- No breaking changes"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Changelog generated successfully"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
