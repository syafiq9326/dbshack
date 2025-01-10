const mysql = require("mysql2");

// Create a MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", // Replace with your MySQL password
    database: "test_db",  // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL!");
});

module.exports = db;
