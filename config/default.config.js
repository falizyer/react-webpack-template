const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "../"),
    source: "./src",
    build: "./dist",
    node_modules: "./node_modules",
    entry: {
        app: "./src/index.js"
    },
    plugins: [
        new CleanWebpackPlugin([
            "./dist"
        ], {
            root: path.resolve(__dirname, "../")
        })
    ],
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    }, {
        test: /\.html$/,
        use: [{
            loader: "html-loader",
            options: {minimize: true}
        }]
    }, {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
    }]
};
