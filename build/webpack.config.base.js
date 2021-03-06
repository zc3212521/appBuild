const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')

const config = {
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        // publicPath: '/public/',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        // modules: [
        //     path.resolve('./app/modules/$redux'),
        //     path.resolve('./node_modules'),
        // ],
        extensions: ['.js', '.jsx'],
        // enforceExtension: false,
        // alias: {
        //     'rootIndex': path.resolve('./app/index.jsx')
        // }
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ]
}

module.exports = config