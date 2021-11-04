class User {
    constructor(userData) {
        this.userId = userData.userId;
        this.email = userData.email;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.password = userData.password;
        this.bookings = userData.bookings;
    }
}

module.exports = User;