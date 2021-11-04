require('dotenv').config({ path: '../.env'});
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbUrl = process.env.DB_CONNECTION_STRING;

module.exports = function() {
    // Connection to mongoDB Atlas
    mongoose.connect(
        dbUrl,
        {
            useNewUrlParser: true
        }
    ).then(() => {
        console.log('Connection to MongoDB atlas successful');
    }).catch(err => {
        console.log('Connection to MongoDB atlas failed');
        console.log(err);
    })
}