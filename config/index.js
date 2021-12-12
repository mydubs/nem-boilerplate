//
// * --- Dependencies --- *
//
const development = require("./env/development");
const production = require("./env/production");

exports.config = {
  development: Object.assign({}, development),
  production: Object.assign({}, production),
}[process.env.NODE_ENV || "development"];
