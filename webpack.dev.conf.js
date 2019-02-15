let webpack = require('webpack');
let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');

let devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    contentBase: baseWebpackConfig.externals.paths.dist,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        port: 4327
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
