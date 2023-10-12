const { urlencoded } = require("express");
const mongoose =require("mongoose")
const Vcard_schema= new mongoose.Schema({
    
    Firstname:{
        type:String,
        
    },
    Lastname:{
        type:String,
       
    },
    
    Phone:{
        type:Number,
       
    },
    Alternatephone:{
        type:Number,
        
    },
    Email:{
        type:String,
        
    },
    Alternateemail:{
        type:String,
        
    },
    Location:{
        type:String
    },
    Dateofbirth:{
        type:Date
    },
    Jobtitle:{
        type:String
    },
    Company:{
        type:String
    },
    
    Description:{
        type:String
    },
    // Profileimage:{
    //     name:String,
    //     data:Buffer,

    // },
    // Coverimage:{
    //     name:String,
    //     data:Buffer,

    // },
    
    
    
    
    
    
    // Locationurl:{
    //     type:String
    // },
    
    // Company:{
    //     type:String
    // },
    
    // Defaultlanguage:{
    //     type:String
    // },
    // Languageenable:{
    //     type:Boolean,
    //     default:false,
        
    // },
    // Enableenquery:{
    //     type:Boolean,
    //     deafult:false
    // },
    // Enabledownlod:{
    //     type:Boolean,
    //     default:true

    // }
});
module.exports=mongoose.model('Vcard',Vcard_schema)