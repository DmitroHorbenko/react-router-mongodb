const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    title:  String,

    city: {
        type: String,
        required: true
    },
    //
    // street: {
    //     tape: String,
    //     required: true
    // },
    //
    // house: {
    //     tape: Number,
    //     required: true
    // },
    //
    // createdAt: {
    //     type: String,
    //     required: true,
    //     default: Date.now
    // },
    // description: {
    //     type: String
    // },
    // status: {
    //     type: ["received", "in processing", "in delivery", "completed", "problem"],
    //     required: true
    // },
    // list: [
    //     {type: Schema.Types.ObjectId,
    //      amount: Number
    //     }
    // ],
    totalCost: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);