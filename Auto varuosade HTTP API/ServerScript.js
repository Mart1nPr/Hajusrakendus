const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/all-parts', (req, res) => {
  fs.readFile('LE.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the LE.txt file');
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}\nUrl: http://localhost:3000/all-parts`);
});
