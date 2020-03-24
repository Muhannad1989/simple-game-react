const express = require('express');
const app = express();
const port = 5000;
var sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
var db = new sqlite3.Database('./server/data1.db');
var bodyParser = require('body-parser');
// var session = require('express-session');
// var path = require('path');

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());
app.use(cors());

app.get('/data', function (request, respond) {
  respond.send('hallo');
});
//

//
app.post('/login', (request, respond) => {
  db.all(
    'SELECT * FROM user_id WHERE name=? AND password=?',
    [request.body.name, request.body.password],
    (err, row) => {
      if (row.length > 0) {
        respond.json({ row });
      } else {
        respond.status(403).send({ errorCode: '403' });
      }
    },
  );
});

app.post('/register', (request, respond) => {
  // console.log('ss'); //test
  // console.log(request.body.name); //test
  // console.log(request.body.password); //test
  db.run(
    'INSERT INTO user_id(name, password) values(?, ?)',
    [request.body.name, request.body.password],
    err => {
      // if (row.length > 0) {
      //   respond.status(200).json('ok');
      // } else {
      //   respond.status(403).send({ errorCode: '403' });
      // }
      console.log(err);
    },
  );
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));
