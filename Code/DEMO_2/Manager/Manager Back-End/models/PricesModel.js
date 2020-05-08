const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var PriceSchema = new Schema({ 
    overstay: {
        type: Number,
        required: true
    },
    walkIn: {
        type: Number,
        required: true
    },
    noShow: {
        type: Number,
        required: true
    },
    hourly: {
        type: Number,
        required: true
    }
},
{collection : 'Prices'}
);
const priceModel = mongoose.model('Prices', PriceSchema);
module.exports = priceModel;