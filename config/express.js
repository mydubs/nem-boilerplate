//
// * --- Dependencies ---*
//
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const config = require("../config");

//
// * --- Exports --- *
//
module.exports = function (app) {
  //
  // * --- CORS configuration --- *
  //
  let corsOptions = {
    origin: ["http://localhost:3000"],
  };
  // Adds the front-end's URL path to cors
  // if defined in the .env file.
  if (process.env.FE_URL) corsOptions.origin.push(process.env.FE_URL);

  //
  // * --- Express Configuration --- *
  //
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors(corsOptions));
  app.use(logger("dev"));
};
