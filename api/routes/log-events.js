var express = require("express");
var router = express.Router();

//var logging = require("./libs/logging.js");
var fs = require("fs");

router.post("/", function(req, res) {
  var newData = req.body.data;

  fs.appendFile(`./logs/${getFileName()}.log`, newData + "\n", function(err) {
    if (err) throw err;
  });

  res.send(JSON.stringify("Content appended successfully!"));
});

function getFileName() {
  var d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

module.exports = router;
