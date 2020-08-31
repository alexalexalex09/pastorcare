require("dotenv").config();
const express = require("express");
const router = express.Router();
const Note = require("../schemas/note.js");

/*Mongo setup*/

const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const mongoDB = process.env.mongo;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  w: "majority",
  family: 4,
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/* Get a note by title */
router.post("/title", function (req, res) {
  Note.findOne({ title: req.body.title }).exec(function (err, curUser) {
    if (err) {
      res.send({ err: err });
    } else {
      res.send({ result: curUser });
    }
  });
});

module.exports = router;
