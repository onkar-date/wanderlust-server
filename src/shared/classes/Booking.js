class Booking {
    constructor(bookingData) {
        this.bookingId = bookingData.bookingId;
        this.userId = bookingData.userId;
        this.destinationId = bookingData.destinationId;
        this.destinationName = bookingData.destinationName;
        this.checkInDate = bookingData.checkInDate;
        this.checkOutDate = bookingData.checkOutDate;
        this.noOfPersons = bookingData.noOfPersons;
        this.totalCharges = bookingData.totalCharges;
    }
}

module.exports = Booking;