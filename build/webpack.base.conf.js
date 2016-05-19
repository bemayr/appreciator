var path = require('path')

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.vue', '.styl'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: 'css!stylus'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      js: 'ts',
      css: 'css!stylus'
    }
  },
  ts: {
      transpileOnly: 'true'
  }
}
