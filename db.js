const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "db",       // service name from docker-compose.yml
  user: "root",
  password: "rootpassword",
  database: "webappdb"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

module.exports = db;
