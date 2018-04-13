const {argv} = require("yargs");
module.exports = require(`./${argv.mode === void 0 ? "production" : argv.mode}.config.js`);