const express = require("express");
const cors = require("cors");
const Connection = require("./Connection");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  })
);

module.exports = app;
