const {resolve} = require('path');

const CONFIG = {
  mode: 'production',
  entry: {
    app: resolve('./app.js')
  },
  devtool: 'source-maps',
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'buble-loader',
        include: [resolve('.')],
        exclude: [/node_modules/],
        options: {
          objectAssign: 'Object.assign'
        }
      }
    ]
  }
};

// This line enables bundling against src in this repo rather than installed deck.gl module
module.exports = env => (env ? require('../../webpack.config.local')(CONFIG)(env) : CONFIG);
