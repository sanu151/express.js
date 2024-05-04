//http request with header

const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`Name : ${name}, ID : ${id}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
