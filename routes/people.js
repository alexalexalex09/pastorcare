require("dotenv").config();
const express = require("express");
const router = express.Router();
const Person = require("../schemas/person");
//Import backend helper object
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

let tests = [
  {
    test: [["First", "Second"], "test"],
    fn: b.stringArrayToObject,
    expect: [{ test: "First" }, { test: "Second" }],
    err: "Error parsing String Arrays",
  },
  {
    test: ["Name", {}, "firstName"],
    fn: b.checkAndAdd,
    expect: { firstName: "Name" },
    err: "Error in checkAndAdd",
  },
  {
    test: [[{ name: "Name" }], {}, "firstName"],
    fn: b.checkAndAdd,
    expect: { firstName: [{ name: "Name" }] },
    err: "Error in checkAndAdd",
  },
];
console.log(b.testAllFn(tests));

/* Get a person by name */
/* /people/get */
router.post("/get", function (req, res) {
  Person.findOne({ name: req.body.name }).exec(function (err, curUser) {
    if (err) {
      res.send({ err: err });
    } else {
      res.send({ result: curUser });
    }
  });
});

/* Add a new person   */
/* /people/add       */
/* TODO: Check before adding if it already exists, and warn if it does */
router.post("/add", function (req, res) {
  console.log("body", req.body);
  let person = {};
  person = b.checkAndAdd(req.body.firstName, person, "firstName");
  person = b.checkAndAdd(req.body.lastName, person, "lastName");
  person = b.checkAndAdd(req.body.formalName, person, "formalName");
  person = b.checkAndAdd(req.body.maidenName, person, "maidenName");
  person = b.checkAndAdd(req.body.birthday, person, "birthday");
  person = b.checkAndAdd(req.body.anniversary, person, "anniversary");
  const occupations = b.stringArrayToObject(req.body.occupations, "title");
  const relationships = b.stringArrayToObject(
    req.body.relationships,
    "relationship"
  );
  const groups = b.stringArrayToObject(req.body.groups, "name");
  person = b.checkAndAdd(occupations, person, "occupations");
  person = b.checkAndAdd(relationships, person, "relationships");
  person = b.checkAndAdd(groups, person, "groups");
  console.log("person:", person);
  new Person(person).save().then(
    function (curUser) {
      console.log("User: ", curUser);
      res.send({ user: curUser });
    },
    function (err) {
      console.log("Error: ", err);
      res.send({ err: err });
    }
  );
});

module.exports = router;
