const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        app: './src/js/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'main.js',
    },

    mode: "development",

    //webpack server
    devServer: {
        static: {
          directory: path.join(__dirname, '/dist'),
        },
        compress: true,
        devMiddleware: {
            writeToDisk: true
        },
        port: 9000,
        open: true,
        hot: false
    },

    module: {
        rules: [

            //html loader
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: true,
                },
            },

            //css & sass loader
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: '../'
                        },
                    },

                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            
            //file loader for images
            {
                //test: /\.(png|svg|jpe?g|gif)$/,
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            },

            //file loader for fonts
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },

    //css-minimizer-plugin
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
        minimize: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
          }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
};