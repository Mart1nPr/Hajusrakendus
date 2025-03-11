const fs = require("fs");
const Papa = require("papaparse");
const express = require('express');
const path = require("path");
const app = express();

// fs.readFile("LE.txt", "utf-8", (CSVdata) => {
//  Papa.parse("LE.txt", )
// });

const data = [];

app.get('/spare-parts', function (req, res) {
  const carParts = path.join(__dirname, "LE.txt");

  fs.readFile(carParts, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

app.listen(3000);

console.log("Live server url: http://localhost:3000/spare-parts");