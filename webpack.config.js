const alias = require('./alias-config');

module.exports = {
  resolve: {
    alias,
  },
  loader: 'less-loader',
  options: { javascriptEnabled: true },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
};
