const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 4500;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/inline.html');
});

const handleListeing = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListeing);
