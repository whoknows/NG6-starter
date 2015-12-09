module.exports = {
    devtool: 'sourcemap',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/app\/lib/, /node_modules/],
            loader: 'ng-annotate!babel'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.styl$/,
            loader: 'style!css!stylus'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: [/\.svg/, /\.eot/, /\.ttf/, /\.woff2/, /\.woff/], // /^icon_lo/, /^fonta/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    }
};
