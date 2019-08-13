const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // on package.json equals to: "wbp": "webpack --mode none wwwroot/source/app.js --output ./wwwroot/dist/bundle.js"
    entry: './wwwroot/source/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/_dist'),
        filename: 'bundle.js'
    },
    // to make jquery available to all modules so the modules don't need to mention require. e.g. see app.js
    // and automatically bundle by webpack
    plugins: [
        // to delete /_dist before crating a new onw
        new CleanWebpackPlugin(),

        //https://dev.to/rodeghiero_/multiple-html-files-with-htmlwebpackplugin-19bf
        new HtmlWebpackPlugin({
            title: 'Output Test',
            filename: './start.html',
            template: './wwwroot/html/index.html'
            //inject: 'body'
        }),

        // not work for webpack 4 extractCSS,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
    ],

    module: {
        rules: [
            //{
            //    test: /\.html$/,
            //    use: [{ loader: "html-loader", options: { minimize: false } }]
            //},
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
                // The loaders are applied from right to left; in this case, 
                // the css - loader is applied first and then the style-loader
            },
            {
                test: /\.js?$/,
                //exclude: /node_modules/, there is exclude because the folder structure is outside wwwroot
                use: {
                    loader: 'babel-loader',
                    options: {
                        // to recognize all the latest ES features (2015/16/17) to be transformed into vanilla javascript
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    }
};