const express = require("express");
const router = express.Router();

// homepage route
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// signup
router
  .route("/signup")
  .get((req, res) => {
    res.render("signup");
  })
  .post((req, res) => {
    res.send(req.body);
  });

// login
router
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    res.send(req.body);
  });

// logout
router.get("/logout", (req, res) => {
  res.send("logout route");
});

// messages
router
  .route("/messages")
  .get((req, res) => {
    res.send("messages route");
  })
  .post((req, res) => {
    res.send(req.body);
  });

module.exports = router;
