const express = require('express');
const destinationRouter = express.Router();
const destinationService = require('../service/destination-service');

// Get destinations
destinationRouter.get('', (req, res, next) => {
    destinationService.getDestination(req.query.destinationId).then(destinations => {
        res.send(destinations);
    }).catch(err => {
        next(err);
    });
});

// Search Destinations
destinationRouter.get('/search', (req, res, next) => {
    destinationService.searchDestination(req.query.searchBy).then(destinations => {
        res.send(destinations);
    }).catch(err => {
        next(err);
    });
});

// Add destination
destinationRouter.post('/destination', (req, res, next) => {
    destinationService.addDestination(req.body).then(addedDes => {
        res.send(addedDes)
    }).catch(err => {
        next(err);
    });
});


module.exports = destinationRouter;