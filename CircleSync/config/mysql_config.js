const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'circle_sync',
    connectionLimit: 10,
  });
  

module.exports = pool
