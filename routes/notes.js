require("dotenv").config();
const express = require("express");
const router = express.Router();
const Note = require("../schemas/note.js");
const b = require("../helpers/b");

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

/* Get a note by title  */
/* /notes/title         */
router.post("/title", function (req, res) {
  Note.findOne({ title: req.body.title }).exec(function (err, curUser) {
    if (err) {
      res.send({ err: err });
    } else {
      res.send({ result: curUser });
    }
  });
});

/*
/* Add a new note */
/* /notes/add     */
/* TODO: Check before adding if it already exists, and warn if it does */
router.post("/add", function (req, res) {
  let note = {};
  note = b.checkAndAdd(req.body.title, note, "title");
  note = b.checkAndAdd(req.body.content, note, "content");
  note = b.checkAndAdd(req.body.tags, note, "tags");
  note = b.checkAndAdd(req.body.date, note, "date");
  note = b.checkAndAdd(req.body.people, note, "people");
  note = b.checkAndAdd(req.body.owner, note, "owner");
  console.log("Note: ", note);

  new Note(note).save().then(
    function (curNote) {
      console.log("Note: ", curNote);
      res.send({ note: curNote });
    },
    function (err) {
      console.log("Error: ", err);
      res.send({ err: err });
    }
  );
});

router.post("/all", function (req, res) {
  Note.find({ owner: req.body.owner }).exec(function (err, curUsers) {
    console.log(req.body.owner);
    res.send(curUsers);
  });
});

module.exports = router;
