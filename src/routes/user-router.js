const express = require('express');
const userRouter = express.Router();
const userService = require('../service/user-service');

// Get Users
userRouter.get('/', (req, res, next) => {
    userService.getUsers().then(users => {
        res.send(users);
    }).catch(err => {
        next(err);
    })
});

// Register User
userRouter.post('/register', (req, res, next) => {
    userService.register(req.body).then(response => {
        res.send(response)
    }).catch(err => {
        next(err);
    })
});

// login
userRouter.post('/login', (req, res, next) => {
    userService.login(req.body).then(logedInUser => {
        res.send(logedInUser)
    }).catch(err => {
        next(err);
    })
});

module.exports = userRouter;