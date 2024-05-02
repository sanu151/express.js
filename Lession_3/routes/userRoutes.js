const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/about", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname + "/../views/about.html"));
  res.append("id", "13000");
});
router.use("/contact", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname + "/../views/contact.html"));
  res.cookie("name", "Supriyo Das");
  res.cookie("email", "das.supriyo07@gmail.com");
  //   res.clearCookie("email");
});

module.exports = router;
