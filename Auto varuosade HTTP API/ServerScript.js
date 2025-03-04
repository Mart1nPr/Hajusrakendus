const express = require('express')
const app = express()

app.get('/varuosad', function (req, res) {
  res.send("Hello API");
});

app.listen(3000);