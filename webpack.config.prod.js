var webpack = require('webpack');
var path = require('path');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    /**
     * Switch loaders to debug mode.
     *
     * See: http://webpack.github.io/docs/configuration.html#debug
     */
    debug: false,
    entry: {
      'main': './src/main.ts'
    },
    output: {
      path: './dist',
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      loaders: [{
        test: /\.ts$/, 
        loader: 'ts'
      },{
        test: /\.css$/, 
        exclude: /src/,
        loaders: ['style', 'css']
      },{
        test: /\.(woff(2)?|ttf|eot|svg|png)$/, 
        loader: 'url?limit=10000' 
      },{ test: /\.html$/, loader: "html" }]
    },
    htmlLoader: {
      minimize: true,
      removeAttributeQuotes: false,
      caseSensitive: true,
      customAttrSurround: [
        [/#/, /(?:)/],
        [/\*/, /(?:)/],
        [/\[?\(?/, /(?:)/]
      ],
      customAttrAssign: [/\)?\]?=/]
    },
    resolve: {
      extensions: ['', '.js', '.ts', '.json', '.css', '.html']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      }),
      new UglifyJsPlugin({
        beautify: false,
        mangle: { screw_ie8 : true }, 
        compress: { screw_ie8: true },
        comments: false
      })
    ]
};