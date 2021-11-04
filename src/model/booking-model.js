const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const models = require('../shared/constants/model-constants');

// Booking Schema

const booknigSchema = new Schema({
    bookingId: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        trim: true,
        required: true
    },
    destinationId: {
        type: String,
        trim: true,
        required: true
    },
    destinationName: {
        type: String,
        trim: true,
        required: true
    },
    checkInDate: {
        type: Date,
        trim: true,
        required: true
    },
    checkOutDate: {
        type: Date,
        trim: true,
        required: true
    },
    noOfPersons: {
        type: Number,
        default: 1,
        min: 1,
        max:100,
        required: true
    },
    totalCharges: {
        type: Number,
        required: true
    }
});

const booknigModel = mongoose.model(models.bookingModel, booknigSchema);
module.exports = booknigModel;