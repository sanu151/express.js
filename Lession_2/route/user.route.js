const express = require("express");
const route = express.Router();

route.get("/about", (req, res) => {
  res.send("<h1>I am a get request from About route</h1>");
});
route.get("/contact", (req, res) => {
  res.send("<h1>I am a get request from Contact route</h1>");
});
route.post("/", (req, res) => {
  res.send("<h1>I am a post request from Home route</h1>");
});
route.put("/", (req, res) => {
  res.send("<h1>I am a put request from Home route</h1>");
});
route.delete("/", (req, res) => {
  res.send("<h1>I am a delete request from Home route</h1>");
});

module.exports = route;
