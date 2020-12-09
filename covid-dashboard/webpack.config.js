const webpack = require('webpack')
const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production'

    const config = {
        mode: isProduction ? 'none' : 'development',
        devtool: isProduction ? false : 'source-map',
        watch: !isProduction,
        entry: ['./src/js/index.js','/src/sass/style.scss'],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'js/script.js',
            publicPath: ''
        },

        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'sass-loader'
                ]
            }, {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                } ]
            },{
                test: /\.html$/i,
                loader: 'html-loader',
              }
            ]
        },

        plugins: [
            new CopyPlugin({
                patterns: [
                  {
                    from: "src/assets/img",
                    to: "assets/img",
                  },
                  {
                    from: "src/assets/audio",
                    to: "assets/audio",
                  }
                ],
              }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html',
                filename: 'index.html',
                cache: false,
            }),
            new MiniCssExtractPlugin({
                filename: 'styles/style.css'
            }),

            // new ESLintPlugin({

            // })
        ]

    }

    return config
}
