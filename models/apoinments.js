const mongoose = require('mongoose')
const Apoinment_Schema = new mongoose.Schema({
    Day:{
        type:Date,
       
    },
    From_time:{
        type:Date,
        
    },
    To_time:{
        type:Date,
       
    },
    Plan: {
        type: String,
        enum: ['free', 'paid'],
       
      },
})
module.exports = mongoose.model('Apoinment',Apoinment_Schema)