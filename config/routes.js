// *
// * --- Controllers --- *
// *
const sample = require("../controllers/sample");
const auth = require("../controllers/auth");

// *
// * --- Middleware --- *
// *
const authMid = require("../middlewares/auth");

// *
// * --- Routes --- *
// *
module.exports = function (app) {
  // *
  // * --- Test Routes --- *
  // *
  app.get("/sample", sample.getSample);

  // *
  // * --- Auth Routes --- *
  // *
  app.post("/auth/create", auth.create);
  app.post("/auth/login", auth.login);

  // *
  // * --- Protected Route Test --- *
  // *
  app.get("/auth/test", authMid.verifyToken, auth.protected);
};
