#!/bin/bash
set -e

# Get the current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")

# Check if this version is already published
NPM_VERSION=$(npm view @runwell/toumana-brand-kit version 2>/dev/null || echo "0.0.0")

if [ "$CURRENT_VERSION" = "$NPM_VERSION" ]; then
  echo "Version $CURRENT_VERSION is already published. Bump version first."
  exit 0
fi

echo "Publishing @runwell/toumana-brand-kit@$CURRENT_VERSION..."

# Clean and build
npm run clean
npm run build

# Publish to npm
npm publish --access public

echo "Successfully published @runwell/toumana-brand-kit@$CURRENT_VERSION"
