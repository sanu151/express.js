// environment variables
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h3>Hello I am Home route</h3>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
