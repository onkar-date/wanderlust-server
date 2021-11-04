let userService = {};
const UserModel = require('../model/user-model');
const User = require('../shared/classes/User');
const UserHelper = require('../shared/helpers/user-helper');
const errorMessage = require('../shared/constants/error-constants');
// Fetch all users
userService.getUsers = () => {
    return UserModel.find().then(users => {
        return users;
    }).catch(err => {
        const error = new Error();
        error.status = 500;
        throw error;
    });
}

// Register User
userService.register = async (userData) => {
    const alreadyRegistered = await UserHelper.isRegistered(userData.email);
    if(!alreadyRegistered) {
        const newId = await UserHelper.generateId();
        userData.userId = newId;
        const newUser = new User(userData);
        const userCreated = await UserModel.create(newUser);
        return userCreated;
    } else {
        const error = new Error(errorMessage.userAlreadyRegistered);
        error.status = 400;
        throw error;
    }
}

// Login User
userService.login = async(credentials) => {
    const user = await UserModel.findOne({"email": credentials.email});
    if(user && user.password === credentials.password) {
        return user;
    } else {
        const error = new Error(errorMessage.invalidCredentials);
        error.status = 400;
        throw error;
    }
}


module.exports = userService;