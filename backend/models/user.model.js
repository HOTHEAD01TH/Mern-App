const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://ibb.co/ygpBtBP',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

// Use module.exports for CommonJS
module.exports = User;
