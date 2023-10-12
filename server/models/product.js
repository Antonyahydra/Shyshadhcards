const mongoose =require("mongoose")
const Product_Schema=new mongoose.Schema({
    Productname:{
        type:String,
        required:true
    },
    Currency:{
        type:String,
        
    },
    Price:{
        type:Number,
        },
    Producturl:{
        type:String,
        },
    Description:{
        type:String,
        required:true,
        },
    Producticon:{
        name:String,
        data:Buffer,
    }


});
module.exports=mongoose.model('Product',Product_Schema)