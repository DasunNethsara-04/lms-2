const express = require("express");
const bcryptjs = require("bcryptjs");
const cors = require("cors");
const Connection = require("./Connection");
const bodyParser = require("body-parser");
const Controller = require("./Controllers");

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
  const status = 1;
  if (
    req.body.firstName !== "" &&
    req.body.lastName !== "" &&
    req.body.email !== "" &&
    req.body.password !== ""
  ) {
    // all fields are filled out
    Controller.getUserById("teacher_tbl", req.body.email)
      .then((foundData) => {
        if (foundData.length < 1) {
          //  no teacher with that email exists in the database
          bcryptjs
            .genSalt(10)
            .then((salt) => {
              bcryptjs
                .hash(req.body.password, salt)
                .then((hashedPassword) => {
                  // user password successfully hashed
                  // get the current date
                  Controller.getCurrentDate()
                    .then((formattedDate) => {
                      const sql =
                        "INSERT INTO teacher_tbl (title, first_name, last_name, email, password, date_added, status) VALUES (?,?,?,?,?,?,?)";
                      Connection.query(
                        sql,
                        [
                          req.body.salutation,
                          req.body.firstName,
                          req.body.lastName,
                          req.body.email,
                          hashedPassword,
                          formattedDate,
                          status,
                        ],
                        (err, result) => {
                          if (result) {
                            res
                              .status(200)
                              .json("Teacher Registered Successfully!");
                          } else {
                            // internal server error
                            res.status(500).json("Internal Server Error");
                          }
                        }
                      );
                    })
                    .catch((err) => {
                      // internal server error
                      res.status(500).json("Internal Server Error");
                    });
                })
                .catch((err) => {
                  // internal server error
                  res.status(500).json("Internal Server Error");
                });
            })
            .catch((err) => {
              // internal server error
              res.status(500).json("Internal Server Error");
            });
        } else {
          // another teacher already has this email address
          res.status(400).json("Email is taken.");
        }
      })
      .catch((err) => {
        //
      });
  } else {
    // all fields need to be filled out
    res.status(400).json("All fields must be filled out.");
  }
});

app.post("login", (req, res) => {
  // implementation of logging in an existing user goes here
});

module.exports = app;
