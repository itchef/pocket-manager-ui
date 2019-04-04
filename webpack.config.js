const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    const plugins = [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ];
    if (devMode) {
        plugins.push(new EnvironmentPlugin({
            SERVER_ENDPOINT: 'http://localhost:4000',
        }));
    }

    return ({
        entry: [
            'whatwg-fetch',
            path.join(process.cwd(), 'src/index.js'),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: '/node_modules/',
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                ['import', { libraryName: '@material-ui/core', style: true },
                                ],
                            ],
                        },
                    },
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                        },
                    ],
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: '/node_modules/',
                    use:[
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        devtool: devMode ? 'source-map' : 'cheap-source-map',
        plugins,
        devServer: {
            host: 'manager-local.pocket.itchef.com',
            before: (app) => {
                app.get('/env', (req, res) => {
                    res.status(200).json({});
                });
            },
        },
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://manager-ui-local.pocket.itchef.com:8080',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
            },
        },
    });
};
