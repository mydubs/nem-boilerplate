//
//  Controllers
//
const sample = require("../controllers/sample");

//
// Middleware
//
// TODO: Add Auth Middleware

//
// Routes
//
module.exports = function (app) {
  //
  // Test Routes
  //
  app.get("/sample", sample.getSample);
};
