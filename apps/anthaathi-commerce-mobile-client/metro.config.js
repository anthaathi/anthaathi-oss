/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const getWorkspaces = require('get-yarn-workspaces');
const path = require('path');

function getConfig(appDir, options = {}) {
  const workspaces = getWorkspaces(appDir);

  // Add additional Yarn workspace package roots to the module map
  // https://bit.ly/2LHHTP0
  const watchFolders = [
    path.resolve(appDir, '..', '..', 'node_modules'),
    ...workspaces
      .filter(workspaceDir => !(workspaceDir === appDir))
      .filter(res => res.indexOf('.') === -1),
  ];

  return {
    watchFolders,
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    projectRoot: __dirname,
    resolver: {
      extraNodeModules: {
        // Resolve all react-native module imports to the locally-installed version
        'react-native': path.resolve(appDir, 'node_modules', 'react-native'),

        react: path.resolve(appDir, 'node_modules', 'react'),

        'react-native-safe-area-context': path.resolve(
          appDir,
          'node_modules',
          'react-native-safe-area-context',
        ),

        'react-native-vector-icons': path.resolve(
          appDir,
          'node_modules',
          'react-native-vector-icons',
        ),

        // Resolve additional nohoist modules depended on by other packages
        'react-native-svg': path.resolve(
          appDir,
          'node_modules',
          'react-native-svg',
        ),

        // Resolve core-js imports to the locally installed version
        'core-js': path.resolve(appDir, 'node_modules', 'core-js'),
      },
    },
  };
}

module.exports = getConfig(__dirname);
