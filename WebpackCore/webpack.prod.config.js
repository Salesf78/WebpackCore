const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // on package.json equals to: 
    // "wbp": "webpack --mode none wwwroot/source/app.js 
    //                 --output./ wwwroot / dist / bundle.js"
    entry: './wwwroot/source/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/_dist'),
        filename: 'bundle.js'
    },

    //create map
    //https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',

    //https://webpack.js.org/plugins/split-chunks-plugin/
    // to split the result into many files.
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                }
            }
        }
    },

    plugins: [
        // to delete /_dist before crating a new onw
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: 'Output Test',
            template: "./wwwroot/html/index.html"
        }),

        // to separate the CSS from JS
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),

        // to make jquery available to all modules 
        // so the modules don't need to mention require. e.g. see app.js
        // and automatically bundle by webpack
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js','default']
        }),
    ],

    module: {
        rules: [
            {
                // to separate CSS from one bundle.js, use this:
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],

                // to bundle CSS with bundle.js for development purpose, use this:
                //test: /\.css$/,
                //use: [{ loader: "style-loader" }, { loader: "css-loader" }]
                // The loaders are applied from right to left; in this case, 
                // the css - loader is applied first and then the style-loader
            },
            {
                test: /\.js?$/,
                //exclude: /node_modules/, there is no exclude because 
                //the folder structure is outside wwwroot
                use: {
                    loader: 'babel-loader',
                    options: {
                        // to recognize all the latest ES features (2015/16/17) 
                        // to be transformed into vanilla javascript
                        presets: ['@babel/preset-env']  
                    }
                }
            },
        ]
    }
};