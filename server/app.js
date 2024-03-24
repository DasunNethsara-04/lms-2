const express = require("express");
const bcryptjs = require("bcryptjs");
const cors = require("cors");
const Connection = require("./Connection");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

app.post("/register", (req, res) => {
  // implementation of registering a new user goes here
});

app.post("login", (req, res) => {
  // implementation of logging in an existing user goes here
});

module.exports = app;
