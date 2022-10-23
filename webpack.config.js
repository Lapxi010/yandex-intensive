const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV

const config = {
    entry: {
        index: {
            import: './src/index.js',
            dependOn: ['about', 'home']
        },
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    devServer:{
        compress: true,
        hot: true,
        port: 3333,
    },
    target: 'web',
    resolve: {
        extensions: ['.js', 'json'],
        fallback: {
            buffer: require.resolve('buffer'),
            crypto: require.resolve('crypto-browserify'),
            stream: false
        },
        alias: {
            'react-is': path.resolve(__dirname, 'node_modules/react-is')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {            
                    loader: 'babel-loader',
                    options: {
                     plugins: [
                        'lodash'
                     ],
                     presets: ['@babel/preset-env','@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html",
                favicon: "./public/favicon.ico",
            }
        ),
        new StatoscopePlugin({
            saveReportTo: './report.html',
            saveStatsTo: './stats.json',
            saveOnlyStats: false,
            open: false,
        }),
        new CleanWebpackPlugin()
    ],
};

if(mode === 'development'){
    config.mode = 'development'
    config.devtool = 'source-map'
}else{
    config.mode = 'production'
    config.optimization={
        minimize: true,
        concatenateModules: true,
        moduleIds: "deterministic",
        usedExports: true,
        splitChunks: {
            minChunks: 2,
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
        runtimeChunk: {
            name: 'runtime',
        },
    }
}

module.exports = config;
