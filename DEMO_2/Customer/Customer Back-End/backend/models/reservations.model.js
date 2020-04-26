const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema(
  {
    email: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
