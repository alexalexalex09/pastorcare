//Set up mongoose connection
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Create schema
var NoteSchema = new Schema(
  {
    title: String,
    content: String,
    tags: [String],
    date: Date,
    people: [{ type: Schema.Types.ObjectId, ref: "Person" }],
  },
  { collection: "notes" }
);

module.exports = mongoose.model("Note", NoteSchema);
/*

//Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema );

You can then require and use the model immediately in other files. Below we show how you might use it to get all instances of the model.

//Create a SomeModel model just by requiring the module
var SomeModel = require('../models/somemodel')

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);
*/
