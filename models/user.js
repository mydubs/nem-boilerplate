// *
// * --- Dependencies --- *
// *
var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const checkLength = require("../shared/helpers").checkLength;
const bcrypt = require("bcrypt");

// *
// * --- Schema --- *
// *
const UserSchema = new Schema({
  name: { type: String, default: "", required: true },
  email: { type: String, default: "", required: true },
  username: { type: String, default: "", required: true },
  hashed_password: { type: String, default: "", required: true },
  authToken: { type: String, default: "", required: false },
});

// *
// * --- Virtuals --- *
// *
UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.hashed_password = this.hashPassword(password);
  })
  .get(function () {
    return this._password;
  });

// *
// * --- Validate Data --- *
// *
UserSchema.path("name").validate(function (name) {
  return checkLength(name, 3);
}, "Name too short.");

UserSchema.path("email").validate(function (email) {
  return checkLength(email, 4);
}, "Email too short.");

UserSchema.path("email").validate(function (email) {
  UserSchema.path("email").validate(function (email) {
    return new Promise((resolve) => {
      const User = mongoose.model("User");
      if (this.isNew || this.isModified("email")) {
        User.find({ email }).exec((err, users) =>
          resolve(!err && !users.length)
        );
      } else {
        resolve(true);
      }
    });
  });
});

UserSchema.path("username").validate(function (username) {
  return checkLength(username, 6);
}, "Username too short.");

// *
// * --- Methods --- *
// *
UserSchema.methods = {
  // * Check Password Match
  authenticate: function (password, callback) {
    bcrypt.compare(password, this.hashed_password, function (err, match) {
      if (err) {
        return callback(err);
      }
      callback(null, match);
    });
  },

  // * Hash Password
  hashPassword: function (password) {
    if (!password) return "";
    try {
      return bcrypt.hashSync(password, 10);
    } catch (err) {
      return "";
    }
  },
};

mongoose.model("User", UserSchema);
