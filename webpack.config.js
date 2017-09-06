var webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jQuery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    resolve: {
        alias: {
        Main: path.resolve('app/components/Main.jsx'),
        Navigation: path.resolve('app/components/Navigation.jsx'),
        Timer: path.resolve('app/components/Timer.jsx'),
        Countdown: path.resolve('app/components/Countdown.jsx'),
        applicationStyles: path.resolve('app/styles/app.scss'),
        },
        extensions: ['.js', '.jxs'],
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
