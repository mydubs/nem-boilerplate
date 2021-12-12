// *
// * --- Initialize Environment --- *
// *
require("dotenv").config();

// *
// * --- Dependencies --- *
// *
const clc = require("cli-color");
const express = require("express");
const mongoose = require("mongoose");

// *
// * --- Configurations --- *
// *
const cfg = require("./config").config;
let appConfig = {};

// *
// * --- Initialize Express --- *
// *
const app = express();
module.exports = app;

// *
// * --- Bootstrap Configurations --- *
// *
require("./config/models");
require("./config/express")(app);
require("./config/routes")(app);

// *
// * --- Server Functions --- *
// *
function listen() {
  app.listen(appConfig.port);
  console.clear();
  console.log(clc.blueBright(appConfig.appName));

  console.log(clc.greenBright("Online via Port: " + appConfig.port));
  if (appConfig.feUrl) {
    console.log(
      clc.cyanBright(
        "Frontend URL\n" + appConfig.feUrl + "\nADDED TO CORS EXCEPTION"
      )
    );
  }
}

// *
// * --- Setup MongoDB Connection --- *
// *
const mongoConnect = (url) => {
  return mongoose.connect(url, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// *
// * --- Start Server Function --- *
// *
function startServer() {
  cfg.getConfig().then((config) => {
    appConfig = config;
    mongoose.connection.on("error", console.log).once("open", listen);
    mongoConnect(config.db);
  });
}

// *
// * === STARTS SERVER === *
// *
startServer();
