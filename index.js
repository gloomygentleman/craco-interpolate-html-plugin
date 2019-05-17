'use strict';

const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env } }) => {
    if (
      pluginOptions &&
      typeof pluginOptions === 'object' &&
      pluginOptions !== null &&
      Object.prototype.toString(pluginOptions) === '[object Object]'
    ) {
      if (pluginOptions.hasOwnProperty('dev') && env === 'development') {
        webpackConfig.plugins.push(new InterpolateHtmlPlugin(htmlWebpackPlugin, pluginOptions.dev));
      } else if (pluginOptions.hasOwnProperty('prod') && env === 'production') {
        webpackConfig.plugins.push(
          new InterpolateHtmlPlugin(htmlWebpackPlugin, pluginOptions.prod)
        );
      } else {
        webpackConfig.plugins.push(new InterpolateHtmlPlugin(htmlWebpackPlugin, pluginOptions));
      }
    } else {
      throw new Error('The craco-interpolate-html plugin is available only for object options');
    }

    return webpackConfig;
  },
};
