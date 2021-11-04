const BookingModel = require('../../model/booking-model');

const bookingHelper = {};

// Generates a new ID
bookingHelper.generateId = () => {
    return BookingModel.find().distinct('bookingId').then(ids => {
        if(ids.length) {
            const lastIdNumber = Number(ids.pop().split('B')[1]);
            return `B${lastIdNumber+1}`;
        }
        return 'B1001';
    })
}

module.exports = bookingHelper;