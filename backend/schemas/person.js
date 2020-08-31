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
    occupations: [{ title: String, organization: String, start: Date }],
    relationships: [
      {
        person: { type: Schema.Types.ObjectId, ref: "Person" },
        relationship: String,
      },
    ],
    groups: [{ type: Schema.Types.ObjectId, ref: "Person" }],
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
