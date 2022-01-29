const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

//New Mongoose Schema: promotionSchema - name, image, featured, cost, description
const promotionSchema = new Schema({
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
        default: true
    }, 
    cost: {
        type: Currency, 
        required: true, 
        min: 0
    }, 
    description: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;