const UserModel = require('../../model/user-model');

const userHelper = {};

// Generates a new ID
userHelper.generateId = () => {
    return UserModel.find().distinct('userId').then(ids => {
        if(ids.length) {
            const lastIdNumber = Number(ids.pop().split('U')[1]);
            return `U${lastIdNumber+1}`;
        }
        return 'U1001';
    })
}

// Check if user is already registered based on email
userHelper.isRegistered = (email) => {
    return UserModel.find({"email": email}).then(users => {
        if(users.length) {
            return true;
        }
        return false;
    }).catch(err => {
        const error = new Error();
        error.status = 500;
        throw error;
    })
}


module.exports = userHelper;