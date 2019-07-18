
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    app: path.join(__dirname, '../app'),
    dist: path.join(__dirname, '../public'),
    build: path.join(__dirname, '/'),
    assets: 'assets/'
}


module.exports = {

    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.app
    },
    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                exclude: '/node_modules/',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, config: {
                                path: `${PATHS.build}/postcss.config.js`
                            }
                        }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.app}/index.html`,
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.app}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.app}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` }
            //{ from: `${PATHS.app}/static`, to: '' }
        ])
    ]
}