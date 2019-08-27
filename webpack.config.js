const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'runtime.ts'),
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'portfolio.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            cortex: __dirname
        },
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx'
        ]
    }
};
