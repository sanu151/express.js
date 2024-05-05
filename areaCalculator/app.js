// route
const express = require("express");
const app = express();

var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

// receive data from user and send to server

app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = 0.5 * base * height;
  res.send(`<h2>Area of triangle is : ${area}</h2>`);
});
app.post("/circle", (req, res) => {
  const radious = req.body.radious;
  const area = Math.PI * Math.pow(radious, 2);
  res.send(`<h2>Area of circle is : ${area}</h2>`);
});

module.exports = app;
