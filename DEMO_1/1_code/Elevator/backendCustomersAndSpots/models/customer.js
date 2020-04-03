const mongoose = require("mongoose"); //Using Mongoose to interact with the MongoDB interface

const Schema = mongoose.Schema; //Creating a new Schema

const CustomerSchema = new Schema({
  //Creating a new customer of the type Schema with attributes of name, license plate, and membership number. I will change this to be more consistent with the other groups for the next demo
  name: {
    type: String,
    required: true
  },
  licensePlate: {
    type: String,
    required: true
  },
  membershipNumber: {
    type: Number,
    required: true
  }
});

module.exports = Customer = mongoose.model("customer", CustomerSchema); //Export this schema model
