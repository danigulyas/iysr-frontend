const path = require('path');
const devConfig = require('../webpack.config.js');

module.exports = {
  module: devConfig.module,
  resolve: devConfig.resolve
};
