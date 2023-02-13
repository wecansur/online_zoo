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
                                'src/sass/index.scss',
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                    }
                }
                ]
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/pages/main/index.html',
            filename: 'index.html'
        }),
        new HtmlWebPackPlugin({
            template: './src/pages/donate/donate-page.html',
            filename: 'donate-page.html'
        })
    ]
};