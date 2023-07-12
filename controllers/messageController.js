// GET homepage index
exports.index = (req, res) => {
  res.render("index");
};

// GET message form
exports.message_get = (req, res) => {
  res.send("new message form");
};

// POST message
exports.message_post = (req, res) => {
  res.send(req.body);
};
