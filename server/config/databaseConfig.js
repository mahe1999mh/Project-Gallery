const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '',
    database: 'userdata' 
    // database: 'web_app_database' 
  });

module.exports = db;
