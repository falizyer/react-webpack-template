const path = require("path");
const {DefinePlugin} = require("webpack");
const {LicenseWebpackPlugin} = require("license-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const config = require("./default.config");

module.exports = {
    context: config.context,
    devtool: "source-map",
    entry: config.entry,
    output: {
        path: path.resolve(config.context, config.build),
        filename: "[name].min.js",
        chunkFilename: "[id].min.js"
    },
    resolve: {
        modules: ["node_modules", `${path.join(config.context, config.source)}`],
        extensions: [".css", ".scss", ".js", ".jsx"]
    },
    plugins: [
        new DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        ...config.plugins,
        new LicenseWebpackPlugin({
            filename: "./3RD-PARTY.LICENSE",
            pattern: /^(MIT|ISC|BSD.*)$/
        }),
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