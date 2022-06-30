module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
    'relay',
    ['module:react-native-dotenv'],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};
