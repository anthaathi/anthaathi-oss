const fs = require('fs/promises');
const path = require('path');
const CleanCSS = require('clean-css');
const client = require('../utils/styletron');

module.exports = async () => `
<style nonce="<!nonce!>">${await fs
  .readFile(path.resolve(__dirname, '../style.css'))
  .then(
    (data) => new CleanCSS().minify(data).styles,
  )}</style>${client.getStylesheetsHtml()}`;
