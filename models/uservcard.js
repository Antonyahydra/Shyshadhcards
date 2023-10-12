const mongoose = require("mongoose")
const Uservcard_Schema = new mongoose.Schema({
    V_cardID:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
        
    },
    Vcard:{
        type:Array,
        required:false
    }
    
},

{ timestamps: true }

)
module.exports=mongoose.model('Uservcard',Uservcard_Schema)