// webpack.config.js
var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, "src"),
  entry: "./js/root.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js' // 打包输出的文件
  },
  module: {
    rules: [{
        test: /\.js$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          //配置参数;
          options: {
            presets: ['es2015', 'react'],
            plugins: ['react-html-attrs']
          }
        }, ]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }]
      },
    ]
  },
};
