// *
// * --- Dependencies --- *
// *
const mongoose = require("mongoose");
const User = mongoose.model("User");
const { wrap: async } = require("co");
const sendRes = require("../shared/helpers").sendResponse;
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

// *
// * --- Route Controller Exports --- *
// *

// * Creates new user
exports.create = async(function* (req, res) {
  const user = new User(req.body);
  try {
    yield user.save();
    res.json(sendRes(true, "User Created!", { username: user.username }));
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// * Authenticates user and gets JWT token
exports.login = async(function* (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  if (!username.length || !password.length)
    res.json(sendRes(false, "Missing username and/or password"));
  User.findOne(
    {
      username: username,
    },
    function (err, user) {
      if (err) res.json(sendRes(false, "Error logging in.", err));
      if (!user) {
        res.json(sendRes(false, "User not found."));
      } else {
        user.authenticate(password, async function (err, match) {
          if (match && !err) {
            let exp = Math.floor(Date.now() / 1000) + 60 * 60;
            const token = await jwt.sign(
              {
                exp: exp,
                id: user.id,
                username: user.username,
              },
              secret
            );
            res.json(
              sendRes(true, "Successfully signed in!", {
                token,
                exp,
              })
            );
          } else {
            res.json(sendRes(false, "Bad Login Info"));
          }
        });
      }
    }
  );
});

// * Sample Protected Route
exports.protected = async(function* (req, res, next) {
  console.log(req.user);
  res.json(
    sendRes(true, "Congrats! Your token works!", {
      username: req.user.username,
    })
  );
});
