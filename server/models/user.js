// Setup Mongodb Schema
const mongoose =require("mongoose")
const User_schema= new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
    }, 
    Email_id:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Vcard:{
      type:Array,
      required:true,
    }
    // User_img:{
    //     name: String,
    //     data: Buffer,
    // }

});
module.exports=mongoose.model('User',User_schema)