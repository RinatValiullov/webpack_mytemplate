let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');

let buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: []
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
