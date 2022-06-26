const config = require("./webpack.config");
const CopyPlugin = require("copy-webpack-plugin");
const ZipperPlugin = require("./ZipperPlugin");
const path = require("path");
const webpack = require("webpack");
const environmentConfig = require(path.resolve(__dirname, `./env/prd.js`));

module.exports = {
    ...config,
    mode: "production",
    plugins: [
        ...config.plugins,
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(environmentConfig)
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "public",
                    filter: async (filePath) => {
                        return path.basename(filePath) !== "index.html"
                    }
                }
            ]
        }),
        new ZipperPlugin()
    ]
}