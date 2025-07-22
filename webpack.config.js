const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    
    module: {
        rules: [ 
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ], 
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',  
        }),
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        })
    ],

    devServer: {
        static: {
        directory: path.join(__dirname, 'dist'),
    },
        compress: true,
        port: 9000, 
        open: true,
    }
}