
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const models = require('../shared/constants/model-constants');

// User Schemas
const userSchema = new Schema({
    userId: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    bookings: {
        type: [String],
        default: []
    }
});

const userModel = mongoose.model(models.userModel, userSchema);
module.exports = userModel;