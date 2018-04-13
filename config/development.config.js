const path = require("path");
const {DefinePlugin} = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const config = require("./default.config");

module.exports = {
    context: config.context,
    devtool: "eval",
    entry: config.entry,
    output: {
        path: path.resolve(config.context, config.build),
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    resolve: {
        modules: ["node_modules", `${path.join(config.context, config.source)}`],
        extensions: [".css", ".scss", ".js", ".jsx"]
    },
    plugins: [
        new DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        ...config.plugins,
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    module: {
        rules: [
            ...config.rules
        ]
    }
};