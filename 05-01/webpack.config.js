// webpack.config.js
var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/js/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, "./src"),
        filename: 'bundle.js' // 打包输出的文件
    },
    module: {
        rules: [{
            test: /\.js?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
            exclude: /(node_modules|bower_components)/,
            loader:'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json', '.coffee']
    }
};
