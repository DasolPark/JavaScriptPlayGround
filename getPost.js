const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/getPost.html');
});

app.post('/login', function(req, res) {
  console.log(req.body.email);
  console.log(req.body.password);
  res.sendFile(__dirname + '/getPost.html');
});

const handleListeing = () => {
  console.log('Listening on: http://localhost:3000');
};

app.listen(3000, handleListeing);
