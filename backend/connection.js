var mySQL = require("mysql");

var connection = mySQL.createConnection({
  host: "localhost",
  user: "root",
  password: "ghkgm0170",
  database: "alumni_db",
});

module.exports = connection;
