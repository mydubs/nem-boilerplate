// *
// * --- Dependencies --- *
// *
const fs = require("fs");
const join = require("path").join;
const models = join(__dirname, "../models");

// * --- --- *
// * This uses filesystem (fs) to read in
// * each file with the '.js' extension
// * from the '/models' folder
// * and load it into the app
// * --- --- *

fs.readdirSync(models)
  .filter((file) => ~file.search(/^[^.].*\.js$/))
  .forEach((file) => require(join(models, file)));
