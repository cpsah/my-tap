import express from "express";
import fs from "fs";

const router = express.Router();
router.post("/", function (req, res) {
  var newData = req.body.data;

  fs.appendFile(`./logs/${getFileName()}.log`, newData + "\n", function (err) {
    if (err) throw err;
  });

  res.send(JSON.stringify("Content appended successfully!"));
});

function getFileName () {
  var d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

module.exports = router;
