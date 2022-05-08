const defaultConfig = require('../babel.config');

module.exports = {
  ...defaultConfig,
  coverageDirectory: `../../coverage/libs/${path.basename(
    path.resolve(process.cwd()),
  )}`,
};
