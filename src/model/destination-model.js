
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const models = require('../shared/constants/model-constants');

// User Schemas
const destinationSchema = new Schema({
    destinationId: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    details: {
        about: {
            type: String,
            required: true
        },
        itinerary: {
            dayWiseDetails: {
                firstDay: {
                    type: String,
                    required: true
                },
                restDaysSightSeeing: {
                    type: [String],
                    required: true
                },
                lastDay: {
                    type: String,
                    required: true
                }
            },
            packageInclusions: {
                type: [String],
                required: true
            },
            tourHighlights: [String],
            tourPace: [String]
        },

    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    chargesPerPerson: {
        type: Number,
        required: true
    },
    noOfNights: {
        type: Number,
        required: true
    },
    flightCharges: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    }
});

const destinationModel = mongoose.model(models.destinationModel, destinationSchema);
module.exports = destinationModel;