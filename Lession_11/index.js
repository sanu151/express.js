require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const myMiddleware = (req, res, next) => {
  req.currentTime = new Date(Date.now());
  console.log(`Middleware function`);
  next();
};

// for use myMiddleware in all routes
app.use(myMiddleware);

app.get("/", (req, res) => {
  console.log("I am home " + req.currentTime);
  res.send(`<h1>I am Home route : ${req.currentTime}</h1>`);
});

app.get("/about", (req, res) => {
  console.log("I am about ");
  res.send(`<h1>I am About route : ${req.currentTime}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
