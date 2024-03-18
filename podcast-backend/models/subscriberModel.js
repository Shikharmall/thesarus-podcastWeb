const mongoose = require('mongoose');


const subscriberSchema = new mongoose.Schema({
    channeluserid:{
        type:String,
        required:true
    },
    subscriberid:{
        type:String,
        required:true
    }
},

{ timestamps:true }

);


module.exports = mongoose.model('Subscriber',subscriberSchema);