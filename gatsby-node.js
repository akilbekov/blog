const rucksack = require('rucksack-css');
const cssnext = require('postcss-cssnext');

exports.modifyWebpackConfig = function (config) {
  config.merge({
    postcss: [
      rucksack(),
      cssnext({
        browsers: ['>1%', 'last 2 versions'],
      }),
    ],
  });

  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  });

  return config;
};
