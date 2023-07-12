// GET signup form
exports.signup_get = (req, res) => {
  res.render("signupForm", { errors: [{ msg: "Incorrect email format" }] });
};

// POST signup
exports.signup_post = (req, res) => {
  res.send(req.body);
};

// GET login form
exports.login_get = (req, res) => {
  res.render("loginForm");
};

// POST login
exports.login_post = (req, res) => {
  res.send(req.body);
};

// GET logout
exports.logout_get = (req, res) => {
  res.send("logout");
};
