const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'auto'
    },
    mode: 'development',
    devServer: {
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true},
                    }
                ]
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates 'style' nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                'src/styles/vars.scss',
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};