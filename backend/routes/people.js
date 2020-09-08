require("dotenv").config();
const express = require("express");
const router = express.Router();
const Person = require("../schemas/person");
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
    fn: stringArrayToObject,
    expect: [{ test: "First" }, { test: "Second" }],
    err: "Error parsing String Arrays",
  },
  {
    test: ["Name", {}, "firstName"],
    fn: checkAndAdd,
    expect: { firstName: "Name" },
    err: "Error in checkAndAdd",
  },
  {
    test: [[{ name: "Name" }], {}, "firstName"],
    fn: checkAndAdd,
    expect: { firstName: [{ name: "Name" }] },
    err: "Error in checkAndAdd",
  },
];
console.log(b.testAllFn(tests));

/**
 *
 *
 * @param {*} item add this to array if exists
 * @param {object} curObj the object to which <item> should be added
 * @param {string} key the property under which <item> should be added
 * @returns modified object with or without new key
 */
function checkAndAdd(item, curObj, field) {
  //console.log(field, " item: ", item);
  if (item) {
    if (Array.isArray(item)) {
      curObj = checkAndAddArray(item, curObj, field);
    } else {
      curObj[field] = item;
    }
    //console.log(field, " update: ", curObj[field]);
  }
  //console.log("returning: ", curObj);
  return curObj;
}

/**
 *
 *
 * @param {*} item add this to array if exists
 * @param {object} curObj the object to which <item> should be added
 * @param {string} field the property under which <item> should be added
 * @returns modified object with or without new key
 */
function checkAndAddArray(item, curObj, field) {
  //console.log("Arrayitem: ", item);
  if (item) {
    if (!curObj[field]) {
      curObj[field] = [];
    }
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        curObj[field].push(item[key]);
      }
    }
    //console.log("Arrayupdate: ", curObj[field]);
  }
  //console.log("Arrayreturning: ", curObj);
  return curObj;
}

/**
 *
 *
 * @param {Array} arr Array of strings to convert to objects
 * @param {String} field Optional: Field to assign strings to, defaults to index
 * @returns {Array} Array of objects
 */
function stringArrayToObject(arr, field) {
  if (arr && Array.isArray(arr) && typeof arr[0] === "string") {
    arr = arr.map((e, i) => {
      var res = {};
      if (field) {
        res[field] = e;
      } else {
        res[i] = e;
      }
      return res;
    });
  }
  return arr;
}

/* Get a person by name */
router.post("/get", function (req, res) {
  Person.findOne({ name: req.body.name }).exec(function (err, curUser) {
    if (err) {
      res.send({ err: err });
    } else {
      res.send({ result: curUser });
    }
  });
});

router.post("/add", function (req, res) {
  console.log("body", req.body);
  let person = {};
  person = checkAndAdd(req.body.firstName, person, "firstName");
  person = checkAndAdd(req.body.lastName, person, "lastName");
  person = checkAndAdd(req.body.formalName, person, "formalName");
  person = checkAndAdd(req.body.maidenName, person, "maidenName");
  person = checkAndAdd(req.body.birthday, person, "birthday");
  person = checkAndAdd(req.body.anniversary, person, "anniversary");
  const occupations = stringArrayToObject(req.body.occupations, "title");
  const relationships = stringArrayToObject(
    req.body.relationships,
    "relationship"
  );
  const groups = stringArrayToObject(req.body.groups, "name");
  person = checkAndAdd(occupations, person, "occupations");
  person = checkAndAdd(relationships, person, "relationships");
  person = checkAndAdd(groups, person, "groups");
  console.log("person:", person);
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
