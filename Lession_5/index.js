// http request with route parameter

const express = require("express");
const app = express();
const PORT = 3001;

app.get("/id/:id/name/:name", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  res.send(`<h1>Hello ${name}</h1><h2>Your ID is : ${id}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
