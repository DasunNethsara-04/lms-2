const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// checking the mysql connection status
conn.connect((err, result) => {
  if (err) {
    console.log("Faild  to connect with MySQL Database");
  } else if (result) {
    console.log("Connected to MySQL Database!");
  }
});

module.exports = conn;
