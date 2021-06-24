const path = require('path');

module.exports = {
    mode:'production',
    entry: path.join(__dirname,'src/index.js'),
    output: { filename:'./webpack.bundle.js' },
    module: {
        rules:[
            {
                test:/\.js$/,
                use: 'babel-loader',
                sideEffects:false
            }
        ]
    },
    optimization: {
        sideEffects: true
    },
    plugins:[
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: 'production'
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     comments: false,
        //     compress: {
        //         warnings: false,
        //         collapse_vars: true,
        //         reduce_vars: true
        //     }
        // }),
        // new webpack.optimize.ModuleConcatenationPlugin()

    ]
}