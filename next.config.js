const aliases = require('./alias-config');

module.exports = {
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
