// *
// * --- Dependencies --- *
// *
const mongoose = require("mongoose");
const { wrap: async } = require("co");
const sendRes = require("../shared/helpers").sendResponse;

// *
// * --- Route Controller Exports --- *
// *
exports.getSample = async(function (req, res, next) {
  res.json(sendRes(true, "Test Route works!", "test"));
});
