const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Backend is Up");
});

app.listen(port, (req, res) => {
  res.send(`server running on ${port}`);
});
