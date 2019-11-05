const { join, resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ip = require('ip');

let devConfig = {
    output: {
        filename: 'script/[name].bundle.js',
    },
    devServer: {
        contentBase: join(__dirname, "../dist"),
        port: 9000,
        open: true,
        hot: true,
        // historyApiFallback: true,
        host: ip.address(),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '我的第一个TS程序',
            filename: 'index.html',
            template: resolve(__dirname, "../src/template/index.html"),
        })
    ],
    devtool: 'inline-source-map'
}

module.exports = devConfig;