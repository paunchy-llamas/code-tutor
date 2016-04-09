var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');
var Q = require('q');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: String,
  likes: Number,
  email: { type: String, required: true, unique: true },
  password: String, // hash and salt password...
  location: Object,
  address: Object,
  isTutor: Boolean,
  bio: String,
  subjects: Object
});


userSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    // bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
    //   if (err) {
    //     reject(err);
    //   } else {
    //     resolve(isMatch);
    //   }
    // });
  });
};

userSchema.pre('save', function (next) {
  var user = this;

  // // only hash the password if it has been modified (or is new)
  // if (!user.isModified('password')) {
  //   return next();
  // }

  // // generate a salt
  // bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
  //   if (err) {
  //     return next(err);
  //   }

  //   // hash the password along with our new salt
  //   bcrypt.hash(user.password, salt, null, function (err, hash) {
  //     if (err) {
  //       return next(err);
  //     }

  //     // override the cleartext password with the hashed one
  //     user.password = hash;
  //     user.salt = salt;
  //     next();
  //   });
  // });

});

module.exports = mongoose.model('User', userSchema);
