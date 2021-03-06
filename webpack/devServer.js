const config = require('../webpack/constants')

const devServer = {
    contentBase: config.IS_PRODUCTION ? config.buildPath : config.sourcePath,
    historyApiFallback: {
        rewrites: [
            //{ from: /^\/$/, to: '/index.html' },
            // { from: /^\/signin/, to: '/signin.html' },
            // { from: /^\/registration/, to: '/signin.html' },
            // { from: /^\/forgot/, to: '/signin.html' },
            { from: /./, to: '/index.html' }
        ]
    },
    port: config.app.port,
    compress: config.IS_PRODUCTION,
    inline: !config.IS_PRODUCTION,
    hot: !config.IS_PRODUCTION,
    host: config.app.host,
    stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
            green: '\u001b[32m'
        }
    }
}

module.exports = devServer
