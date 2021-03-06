module.exports = {
    entry: './client/index.js',
 
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: 'dist'
    },
 
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
};