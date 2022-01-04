const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbUrl = "mongodb://wanderlustAdmin:wanderlust1234@cluster0-shard-00-00.bridr.mongodb.net:27017,cluster0-shard-00-01.bridr.mongodb.net:27017,cluster0-shard-00-02.bridr.mongodb.net:27017/wanderlustDB?ssl=true&replicaSet=atlas-10ngx2-shard-0&authSource=admin&retryWrites=true&w=majority";
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