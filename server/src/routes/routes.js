const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
// const passwordController = require("./controllers/passwordController");
// const otpController = require("./utils/otpController");

router.get("/", (req, res) => {
  return res.json("Api is Working!...");
});

// ========= User ============
router.post("/user/register", userController.register);
router.get("/user/fetch/:id", userController.fetchUser);
router.post("/user/login", userController.loginUser);
router.post("/user/logout", userController.logout);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/user/otp/verify", otpController.verifyOtp);

// ============= Password ====================
// router.post("/generatePassword", passwordController.generatePassword);
// router.post("/addPassword/:id", passwordController.createPasswordDB);
// router.get("/getPassword/:id", passwordController.getPasswords);
// router.put("/updatePassword/:id", passwordController.updatePassword);
// router.delete("/deletePassword/:id", passwordController.deletePassword);

module.exports = router;
