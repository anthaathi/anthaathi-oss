const path = require('path');

module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: 'jsdom',
  coverageDirectory: `../../coverage/libs/${path.basename(
    path.resolve(process.cwd()),
  )}`,
};
