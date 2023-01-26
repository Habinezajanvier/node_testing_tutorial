const express = require("express");
const routes = require("./src/routes");

const app = express();

app.use(express.json());
app.use("/posts", routes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my apis" });
});

module.exports = app;
