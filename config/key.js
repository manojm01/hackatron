// module.exports = {
//     MongoURI: "mongodb+srv://tags:tags0123@cluster0.bs4zj.mongodb.net/Hostel_Management"
// }
// module.exports = {
//     MongoURI: "mongodb://admin:admin987@cluster0-shard-00-00.r3fs6.mongodb.net:27017,cluster0-shard-00-01.r3fs6.mongodb.net:27017,cluster0-shard-00-02.r3fs6.mongodb.net:27017/auth?authSource=admin&replicaSet=atlas-638q0p-shard-0&readPreference=primary&ssl=true"
// }

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tags:tags0123@cluster0.bs4zj.mongodb.net/Hostel_Management', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {

    if (!err) { console.log('MongoDB Connection Succeeded'); }
    else { console.log('Error in DB Connection: ' + err); }

});

require('../models/User');