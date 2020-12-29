/* eslint-disable */
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    const replacePlugin = replace({
      __version__: process.env.VERSION || 'local',
    });

    config.plugins = [replacePlugin, ...config.plugins];

    return config;
  },
};
