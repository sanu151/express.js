// send and receive form data (Form data/html file)

const express = require("express");
const app = express();
const PORT = 3001;
var bodyParser = require("body-parser");
const path = require("path");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/register.html"));
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`<h2>Your Name : ${fullName}</h2><p>Your Age : ${age}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
