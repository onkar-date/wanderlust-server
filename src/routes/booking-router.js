const express = require('express');
const bookingRouter = express.Router();
const bookingService = require('../service/booking-service');

// booking dest
bookingRouter.post('', (req, res, next) => {
    bookingService.bookDestination(req.body).then(bookingDetails => {
        res.send({
            message: 'Booking Successful',
            bookingDetails
        });
    }).catch(err => {
        next(err);
    });
});

// get user bookings
bookingRouter.get('', (req, res, next) => {
    bookingService.getBookings(req.query.userId).then(userookings => {
        res.send(userookings);
    }).catch(err => {
        next(err);
    });
});

module.exports = bookingRouter;