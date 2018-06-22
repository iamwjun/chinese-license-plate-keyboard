const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "../"
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', "react", "es2015", 'stage-2'],
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                    }
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?name=images/[name].[ext]&limit=1'
            }
        ]
    },
    plugins: [        
        new HtmlWebpackPlugin({
            title: '添加车牌',
            minify:{
				collapseWhitespace: false
			},
            template: 'src/index.ejs',
			filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/static/'
    }
};