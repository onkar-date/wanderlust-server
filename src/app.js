
require('dotenv').config({ path: '../.env'});
const express = require('express');
const cors = require('cors');
const app = express();
const databaseConnection = require('./utilities/connection');
const userRouter = require('./routes/user-router');
const destinationRouter = require('./routes/destination-router');
const bookingRouter = require('./routes/booking-router');
const PORT = process.env.PORT || 3000;

databaseConnection();

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/booking', bookingRouter);
app.use('/destination', destinationRouter);


// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({message: error.message});
})

// Starting Server 
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
