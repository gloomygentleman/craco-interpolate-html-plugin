'use strict';

const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = params => config => {
  config.plugins.push(new InterpolateHtmlPlugin(htmlWebpackPlugin, params));

  return config;
};
