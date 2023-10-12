require('dotenv').config()
const express = require('express');
const cors=require('cors');
const app = express();



const mongoose =require("mongoose")
const aurl=process.env.PORT
const durl=process.env.DBURL



//db connection
mongoose.set('strictQuery',false)
mongoose.connect(durl,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',(err)=>{
    console.log(err);
})
db.once('open',()=>{
    console.log("connected to db");
})


app.use(cors());
app.use(express.json())
// Routes


const userRoutes = require("./routes/user")
const vcardRoutes = require("./routes/vcard")
const serviceRoutes = require("./routes/service")
const productRoutes = require("./routes/product")
const businesRoutes = require("./routes/busineshours")
const apoinmemtsRoutes = require("./routes/Apoinments")
const socialRoutes = require("./routes/socialmedia")

// Setup URL
app.use('/user',userRoutes);
app.use('/vcard',vcardRoutes);
app.use('/service',serviceRoutes)
app.use('/product',productRoutes)
app.use('/business',businesRoutes)
app.use('/apoinment',apoinmemtsRoutes)
app.use('/social',socialRoutes)






// Setup Server

app.listen(aurl),()=>{
    console.log(`server running ${base}`);
};