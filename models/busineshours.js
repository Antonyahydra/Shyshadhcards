const mongoose = require("mongoose")
const Busineshours_Schema = new mongoose.Schema({
    BusinessHours:{
      type:Array
    }
})
module.exports=mongoose.model('Busines',Busineshours_Schema)