const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const creditcardSchema = new Schema({
  cardNumber: { type: Number, trim: true, minlength: 15 },
  expDate: { type: String, trim: true, minlength: 5 },
  cvc: { type: Number, trim: true, minlength: 3 },
});

const Payment = mongoose.model("Payment", creditcardSchema);

module.exports = Payment;
