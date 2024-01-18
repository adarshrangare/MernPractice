const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("<h1>Hello!  Welcome to NodeJs</h1>");
});

app.listen(8080, () => {
  console.log("Server Successfully Running On:8080");
});
