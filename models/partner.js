const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//My new partnerSchema: Name, Image, Featured, Description
const partnerSchema = new Schema({
    name: {
        type: String,
        required: true, 
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean, 
        default: false
    }, 
    description: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;

// alternative export code 
//module.exports = mongoose.model('partner', partnerSchema);