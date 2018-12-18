// Set up MySQL connection.
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root1",
  password: "",
  database: "burgers_dbs",
  // socket: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
