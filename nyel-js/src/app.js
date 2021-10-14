const express = require('express');
const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

app.get('/', function (req, res) {
  res.send('hello world nyel 123')
});



