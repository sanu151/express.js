// regular expression in express routing
const express = require("express");
const app = express();

app.get("/product/:id([0-9]{3})", (req, res) => {
  const id = req.params.id;
  res.send(`<h2>ID : ${id}</h2>`);
});
app.get("/product/:title([a-zA-Z0-9]+)", (req, res) => {
  const id = req.params.title;
  res.send(`<h2>Title : ${id}</h2>`);
});

app.use("*", (req, res) => {
  req.status(404).send(`{
        message: "not a valid route"
    }`);
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
