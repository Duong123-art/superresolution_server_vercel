const express = require('express');
const route = require('./API/route.js');
const bodyParser = require('body-parser');
const connection = require('./API/database_connection');

const app = express();

// Setup middleWare
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

module.exports = app;

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));

route(app);

if (connection) {
  connection.connect((err) => {
    if (err) {
      console.log('error: ', err);
    } else {
      console.log('connect successfully');
    }
  });
} else {
  connection.release();
}
console.log('Hello');
