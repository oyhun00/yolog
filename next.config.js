// const withAntdLess = require('next-plugin-antd-less');
const aliases = require('./alias-config');

module.exports = {
  // lessVarsFilePath: './public/style/yolog.less',
  // lessVarsFilePathAppendToEndOfContent: true,
  // cssLoaderOptions: {},

  webpack(config) {
    const { alias } = config.resolve;
    const configure = config;

    configure.resolve.alias = {
      ...alias,
      ...aliases,
    };

    return config;
  },
};
