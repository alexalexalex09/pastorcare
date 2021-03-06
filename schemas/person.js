//Set up mongoose connection
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Create schema
var PersonSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    formalName: String,
    maidenName: String,
    birthday: Date,
    anniversary: Date,
    phone: String,
    address: String,
    occupations: [{ title: String }],
    relationships: [
      {
        person: String,
        relationship: String,
      },
    ],
    groups: [{ name: String }],
    owner: String,
  },
  { collection: "people" }
);

module.exports = mongoose.model("Person", PersonSchema);
/*

//Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema );

You can then require and use the model immediately in other files. Below we show how you might use it to get all instances of the model.

//Create a SomeModel model just by requiring the module
var SomeModel = require('../models/somemodel')

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);
*/
