/*
* @Author: inksmallfrog
* @Date:   2017-04-26 16:00:29
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 16:53:34
*/

'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        'whatwg-fetch',
        './app.js',
    ],
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: [
                    'json-loader',
                ],
            },
            {
                test: /\.(jpe?g|png)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg:{
                                progressive: true,
                            },
                            gifsicle:{
                                interlaced: false
                            },
                            optipng:{
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ],
            },
            {
                 test: /\.(eot|svg|ttf|woff|woff2)$/,
                 use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'fonts/[name].[md5:hash:hex:7].[ext]'
                        }
                    }
                 ]
            }
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src')
        ],
    }
};