'use strict';

const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env } }) => {
    if (pluginOptions && Object.prototype.toString(pluginOptions) === '[object Object]') {
      const originInterpolatePlugin = webpackConfig.plugins.find(
        d => d.replacements && d.replacements.NODE_ENV
      );

      const interpolatePlugin =
        (originInterpolatePlugin && originInterpolatePlugin.htmlWebpackPlugin) ||
        require('html-webpack-plugin');

      webpackConfig.plugins.push(new InterpolateHtmlPlugin(interpolatePlugin, pluginOptions));
    } else {
      throw new Error('The craco-interpolate-html plugin is available only for object options');
    }

    return webpackConfig;
  },
};
