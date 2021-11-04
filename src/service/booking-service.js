let bookingService = {};
const BookingModel = require('../model/booking-model');
const Booking = require('../shared/classes/Booking');
const BookingHelper = require('../shared/helpers/booking-helper');
const errorMessage = require('../shared/constants/error-constants');

// Fetch all bookings of user
bookingService.getBookings = (userId) => {
    return BookingModel.find({"userId": userId}).then(bookings => {
        return bookings;
    }).catch(() => {
        const error = new Error();
        error.status = 500;
        throw error;
    });
}

// Book Destination
bookingService.bookDestination = async (bookingData) => {
    const newId = await BookingHelper.generateId();
    bookingData.bookingId = newId;
    const newBooking = new Booking(bookingData);
    const destinationBooked = await BookingModel.create(newBooking);
    return destinationBooked;
}


module.exports = bookingService;