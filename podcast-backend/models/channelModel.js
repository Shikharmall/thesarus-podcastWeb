const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    user_id:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    frontimage:{
        type:String,
        required:true
    },
    coverimage:{
        type:String,
        required:true
    },
    titleimage:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    season:{
        type:String,
        required:true
    },
    live:{
        type:String,
        required:true
    }
},

{ timestamps:true }

);

module.exports = mongoose.model('Channel',channelSchema);