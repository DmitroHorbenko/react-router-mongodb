const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    brend: {
        type: String,
        riquired: true
    },
    model: {
        type: String,
        riquired: true
    },
    category: {
        type: String,
        riquired: true
    },
    description: {
        type: String
    },
    cost: {
        type: Number,
        riquired: true
    },
    createdAt: {
        type: String,
        reqired: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);