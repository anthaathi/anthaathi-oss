/**
 * @type {jest.Config}
 */
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.(ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-native-iphone-x-helper|react-native-vector-icons|react-native-elements|@react-native(-community)?)/)',
  ],
};
