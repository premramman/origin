
const { getDefaultConfig } = require('@react-native/metro-config');
const path = require('path');

// Define paths relative to the native-app package
const projectRoot = __dirname;
// Assumes the monorepo root is two levels up (origin/)
const workspaceRoot = path.resolve(projectRoot, '../..'); 

module.exports = (async () => {
  const config = await getDefaultConfig(projectRoot);

  // 1. Tell Metro to watch the whole monorepo folder for changes
  config.watchFolders = [workspaceRoot];

  // 2. Tell Metro where to resolve node_modules (local and root)
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ];

  // 3. Optional: Add a resolver for the new package extension
  // if you plan on using .web.js/.android.js in shared components.
  // config.resolver.sourceExts.push('ts', 'tsx', 'js', 'jsx', 'json', 'wasm'); 

  return config;
})();