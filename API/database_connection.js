const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host: 'b5hqaagqf1imkytnpszs-mysql.services.clever-cloud.com',
  user: 'urebt0zilksggrq3',
  password: 'WuYTSEAR1LMSbtIldxoE',
  database: 'b5hqaagqf1imkytnpszs',
});

module.exports = connection;
