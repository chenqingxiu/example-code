var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },

  output: {
    path: __dirname+'/dist',
    filename: 'js/[name]-[chunkhash].js'
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      inject: 'body',
      title: 'a is good',
      date: new Date(),
      chunks: ['main', 'a']
    }),

    new htmlWebpackPlugin({
      filename: 'b.html',
      template: 'index.html',
      inject: 'body',
      title: 'b is good',
      date: new Date(),
      chunks: ['main', 'b']
    }),

    new htmlWebpackPlugin({
      filename: 'c.html',
      template: 'index.html',
      inject: 'body',
      title: 'c is good',
      date: new Date(),
      chunks: ['main', 'c']
    })
  ]
}
