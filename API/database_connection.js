const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'superresolutiondatabase',
});

module.exports = connection;
