var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    main: __dirname + '/src/script/main.js',
    a: __dirname + '/src/script/a.js'
  },
  output: {
    path: __dirname + '/WebRoot',
    filename: 'js/[name]-[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index-[hash].html',
      inject: 'head'
    })
  ]
}
