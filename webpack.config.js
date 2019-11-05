const { join, resolve } = require("path");
const merge = require('webpack-merge');

const argv = require('yargs-parser')(process.argv.slice(2)) // 解析 package.json 传入的参数

const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

let strategyMerge = merge.strategy({
    entry: 'prepend',
});


let baseConfig = {
    entry: {
        app: resolve(__dirname, './src/index.tsx')
    },
    output: {
        path: join(__dirname, "./dist/assets"),
        filename: "scripts/[name].bundle.js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    }
                    
                ]
            },
            {
                test: /\.tsx$/,
                // exclude: /node_modules/, //排除 node_modules 里面的tsx文件
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
    ],
    optimization: {
        runtimeChunk: {
            name: "runtime"
        }
    },
    // externals: { //不需要打包
    //     react: "React",
    //     "react-router-dom": "ReactRouterDOM",
    //     mobx: "mobx",
    //     "mobx-react-lite": "mobx-react-lite"
    // },
    resolve: {
        alias: {
            "@": resolve("src"),
        },
        modules: ["node_modules", resolve("src")],
        extensions: [".js", ".ts", ".tsx", "jsx"]
    }
};

module.exports = strategyMerge(baseConfig, _mergeConfig);