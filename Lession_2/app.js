const express = require("express");
const app = express();
const userRouter = require("./route/user.route");

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>I am a get request from Home route</h1>");
});
app.use("/about", (req, res) => {
  res.send({
    name: "Supriyo Das",
    message: "Hi I am about Page",
    statusCode: 200,
  });
});
app.use("/contact", (req, res) => {
  res.send("<h1>I am a get request from Contact route</h1>");
});

app.use((req, res) => {
  res.send("<h1>404 !!! Not a valid URL</h1>");
});

module.exports = app;
