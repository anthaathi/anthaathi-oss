module.exports = {
  extends: ['../../node_modules/gts/', 'eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};
