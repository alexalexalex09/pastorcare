require("dotenv").config();
const express = require("express");
const router = express.Router();
const Person = require("../schemas/person.js");

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

/* Get a person by name */
router.post("/name", function (req, res) {
  Person.findOne({ name: req.body.name }).exec(function (err, curUser) {
    if (err) {
      res.send({ err: err });
    } else {
      res.send({ result: curUser });
    }
  });
});

/**
 *
 *
 * @param {*} item add this to array if exists
 * @param {object} curObj the object to which <item> should be added
 * @param {string} key the property under which <item> should be added
 * @returns modified object with or without new key
 */
function checkAndAdd(item, curObj, key) {
  console.log("item: ", item);
  if (item) {
    curObj[key] = item;
    console.log("update: ", curObj[key]);
  }
  console.log("returning: ", curObj);
  return curObj;
}

router.post("/add", function (req, res) {
  console.log("body", req.body);
  var person = {};
  if (req.body.firstName) {
    person.firstName = req.body.firstName;
  }
  person = checkAndAdd(req.body.firstName, person, "firstName");
  person = checkAndAdd(req.body.lastName, person, "lastName");
  person = checkAndAdd(req.body.maidenName, person, "maidenName");
  person = checkAndAdd(req.body.birthday, person, "birthday");
  person = checkAndAdd(req.body.anniversary, person, "anniversary");
  person.occupations = [];
  person.groups = [];
  if (req.body.occupations) {
    for (let key in req.body.occupations) {
      if (req.body.occupations.hasOwnProperty(key)) {
        person.occupations.push(req.body.occupations[key]);
      }
    }
  }
  if (req.body.groups) {
    for (let key in req.body.groups) {
      if (req.body.groups.hasOwnProperty(key)) {
        person.groups.push(req.body.groups[key]);
      }
    }
  }
  Person.findOneAndUpdate({ name: req.body.name }, person).exec(function (
    err,
    curUser
  ) {
    if (err) {
      console.log("Error: ", err);
      res.send({ err: err });
    } else {
      if (curUser) {
        curUser.save();
        console.log("User: ", curUser);
        res.send({ result: curUser });
      } else {
        curUser = new Person(person);
        curUser.save();
        res.send({ newresult: curUser });
      }
    }
  });
});

module.exports = router;
