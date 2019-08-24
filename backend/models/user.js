const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    //
    // age: {
    //     type: Number,
    //     required: true,
    //     min: 14,
    //     max:100
    // },
    //
    // phone: {
    //     type: Number,
    //     reqired: true
    // },
    // bonus: {
    //     type: Number
    // },
    createdAt: {
        type: String,
        reqired: true,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);