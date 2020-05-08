const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
var EventSchema = new Schema({ 
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{collection : 'Events'}
);
const EventModel = mongoose.model('Events', EventSchema);
module.exports = EventModel;