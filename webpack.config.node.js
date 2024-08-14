const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './main.mjs', // Ensure your entry point is correct
    target: 'node', // Ensure that the code is suitable for Node.js
    externals: [nodeExternals()], // Exclude Node.js modules from the bundle
    output: {
        path: path.resolve('dist'),
        filename: 'server.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.mjs'], // Ensure these file types are handled
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/, // Adjust the test to include `.mjs` if needed
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Ensure these presets are used
                    },
                },
            },
        ],
    },
};