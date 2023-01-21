const autoprefixer = require("autoprefixer");
const postCssPresetEnv = require("postcss-preset-env");
const postCssImport = require("postcss-import");
const postCssMixins = require("postcss-mixins");

module.exports = {
  plugins: [
    autoprefixer,
    postCssImport,
    postCssMixins,
    postCssPresetEnv({ stage: 0, features: { "nesting-rules": true } }),
  ],
};
