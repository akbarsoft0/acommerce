const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  phone: Number,
});

const UserModal = mongoose.model("users", UserSchema);

module.exports = UserModal;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     firstname: {
//       type: String,
//       required: true,
//     },
//     lastname: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     // otp: {
//     //   type: String,
//     //   required: true,
//     // },
//     // otpExpiresAt: {
//     //   type: Date,
//     //   required: true,
//     // },
//     // verified: {
//     //   type: Boolean,
//     //   default: false,
//     // },
//   },
//   // { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);
