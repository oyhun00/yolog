const aliases = require('./alias-config');

module.exports = {
  images: {
    domains: ['yolog.s3.ap-northeast-2.amazonaws.com', 'localhost:3000', '*'],
  },

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
