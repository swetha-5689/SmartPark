const mongoose = require("mongoose"); //This follows the same logic as the customer model, only this time we are making a model for a parking spot

const Schema = mongoose.Schema;

const SpotSchema = new Schema({
  //The attributes that are associated with the parking spot. Again, I will update this to be more consistent with other group members
  spotNumber: {
    type: String,
    required: true
  },
  floorNumber: {
    type: String,
    required: true
  },
  isVacant: {
    type: Boolean,
    required: true
  },
  isReserved: {
    type: Boolean,
    required: true
  },
  isHandicapped: {
    type: Boolean,
    required: true
  },
  isPremium: {
    type: Boolean,
    required: true
  }
});

module.exports = Spot = mongoose.model("spot", SpotSchema);
