const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
var ReservationSchema = new Schema({ 
    custFName: {
        type: String,
        required: true
    },
    custLName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Walk-in", "Confirmed"],
        required: true
    },
    car: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
        required: false
    },
    reserveTime: {
        type: Date
    },
    Paid: {
        type: Boolean,
        required: true
    },
    resID: {
        type: Number,
        required: true
    }
},
{collection : 'Reservations'}
);
const resModel = mongoose.model('Reservations', ReservationSchema);
module.exports = resModel;