const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Thispassw0rd1!",
  database: "odyssey"
});
module.exports = connection;
