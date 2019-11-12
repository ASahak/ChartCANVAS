const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: ['./src/index.js'],
    module: {
        // loaders: [
        //     {
        //         test: /\.css$/,
        //         loader: 'style-loader!css-loader'
        //     }
        // ],
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3003,
            server: {baseDir: ['dist']},
            files: ['./dist/*'],
            notify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    watch: true,
    devtool: 'source-map'
};