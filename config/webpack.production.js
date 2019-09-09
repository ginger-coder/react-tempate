const { join, resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //分离CSS
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); //压缩混淆 js
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //压缩 css
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //清理文件夹
const { GenerateSW } = require('workbox-webpack-plugin');

let prodConfig = {
    output: {
        filename: 'script/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/[name].[hash:5].css',
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            title: '我的第一个TS程序',
            filename: 'index.html',
            template: resolve(__dirname, "../src/template/index.html"),
        }),
        new GenerateSW({
            importWorkboxFrom: "local",
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [{
                urlPattern: new RegExp('.*\.html'),
                handler: 'NetworkFirst',
                options: {
                    cacheableResponse: {
                        statuses: [200]
                    }
                }
            }, {
                urlPattern: new RegExp('.*\.(?:js|css)'),
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheableResponse: {
                        statuses: [200]
                    }
                }
            }, {
                urlPattern: new RegExp('.*\.(?:ico|png|jpeg)'),
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheableResponse: {
                        statuses: [200]
                    }
                }
            }]
        })

    ],
}

module.exports = prodConfig;