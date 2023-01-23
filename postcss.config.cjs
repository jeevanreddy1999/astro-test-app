const autoprefixer = require("autoprefixer");
const postCssPresetEnv = require("postcss-preset-env");
const postCssNested = require("postcss-nested");
const postCssImport = require("postcss-import");
const postCssMixins = require("postcss-mixins");

module.exports = {
  plugins: [
    autoprefixer,
    postCssImport,
    postCssMixins,
    postCssNested,
    postCssPresetEnv({ stage: 0 }),
  ],
};
