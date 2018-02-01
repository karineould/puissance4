const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/app.js',
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            // {
            //     test: /\.less$/,
            //     loader: 'style!css!less'
            // },
            // {
            //     test: /\.css$/,
            //     loader: 'css-loader', options: { url: false }
            // },
            // {
            //     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            //     loader: 'url-loader?limit=100000'
            // }
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ],
};
