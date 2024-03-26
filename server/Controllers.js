const Connection = require("./Connection");

const getUserById = (tableName, userId, status) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${tableName} WHERE email='${userId}' AND status='${status}'`;
    Connection.query(sql, (err, foundData) => {
      if (err) {
        console.log("Error while executing the SQL query: ", err);
        reject(err);
      } else {
        resolve(foundData);
      }
    });
  });
};

const getCurrentDate = () => {
  return new Promise((resolve, reject) => {
    // setting up date format
    const date = new Date();

    // Get year, month, and day part from the date
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    const formattedDate = year + "-" + month + "-" + day;
    resolve(formattedDate);
  });
};

exports.getUserById = getUserById;
exports.getCurrentDate = getCurrentDate;
