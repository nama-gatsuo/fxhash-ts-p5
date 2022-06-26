const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "main.js",
        clean: true,
    },
    resolve: {
        extensions: [".js", ".ts"],
        modules: [path.resolve("./src"), path.resolve("./node_modules")],
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: false,
            template: "./public/index.html"
        }),
    ],
};
