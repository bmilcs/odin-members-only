const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const userController = require("../controllers/userController");

// homepage
router.get("/", messageController.index);

// messages
router
  .route("/message")
  .get(messageController.message_get)
  .post(messageController.message_post);

// user signup
router
  .route("/signup")
  .get(userController.signup_get)
  .post(userController.signup_post);

// user login
router
  .route("/login")
  .get(userController.login_get)
  .post(userController.login_post);

// user logout
router.get("/logout", userController.logout_get);

module.exports = router;
