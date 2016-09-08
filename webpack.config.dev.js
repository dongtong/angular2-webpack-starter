var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
      'main': './src/main.ts'
    },
    output: {
      path: './',
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    postcss: [autoprefixer],
    module: {
      loaders: [{
        test: /\.ts$/, 
        loader: 'ts'
      },{
        test: /\.css$/, 
        exclude: /src/,
        loaders: ['style', 'css']
      },{
        test: /\.css$/, 
        include: /src/, 
        loader: 'raw!postcss'
      },{
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },{
        test: /\.(woff|woff2|ttf|eot|svg|png)$/, 
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
      extensions: ['', '.js', '.ts', '.json', '.scss', '.css', '.html']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
};