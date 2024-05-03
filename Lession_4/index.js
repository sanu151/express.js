const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  // request send to server from url, example: localhost:3000/?id=123&name=supriyo
  const { id, name } = req.query;
  res.send(`<h1>Hello ${name}</h1> <h2>your ID is ${id}</h2>`);
});

// create express server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
