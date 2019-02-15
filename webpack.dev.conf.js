let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');

let devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        port: 4327
    },
    plugins: []
});

module.export = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
