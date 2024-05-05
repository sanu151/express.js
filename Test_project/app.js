// Routes

const express = require("express");
const app = express();

// Serve static files from the 'views/css' directory
app.use("/views/css", express.static("views/css"));
// app.use("/views/html", express.static("views/html"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/html/index.html");
});

module.exports = app;
