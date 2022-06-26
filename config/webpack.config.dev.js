const config = require("./webpack.config");
const webpack = require("webpack");
const path = require("path");
const environmentConfig = require(path.resolve(__dirname, `./env/dev.js`));

module.exports = {
    ...config,
    mode: "development",
    devtool: "source-map",
    plugins: [
        ...config.plugins,
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(environmentConfig)
        }),
    ],
    devServer: {
        hot: true,
        port: 8080,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
}