const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes.js");

app.use(userRouter);

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.statusCode = 404;
  res.send("<h2>404 !!! Page Not Found");
});

module.exports = app;
