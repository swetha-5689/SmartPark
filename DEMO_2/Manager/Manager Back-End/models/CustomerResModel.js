const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema(
  {
    email: { type: String, required: true },
    lengthreserve: { type: Number},
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const customerResModel = mongoose.model("reservations", ReservationSchema);

module.exports = customerResModel;