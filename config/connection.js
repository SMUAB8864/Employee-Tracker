var  mysql = require("mysql");
var util = require("util");

var Connection = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: "root",
    password: "root",
    database: "employee_tracker_db",
});

connection.connect((err) => {if (err) throw err;});

connection.query = util.promisify(connection.query).bind(connection);

module.exports = connection;
