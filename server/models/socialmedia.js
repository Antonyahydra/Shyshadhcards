const mongoose = require('mongoose')
const Socialmedia_Schema = new mongoose.Schema({
    Website_url: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    Twiter_url: {
        type: String,
        unique: true,
        trim: true,
    },
    Facbook_url: {
        type: String,
        unique: true,
        trim: true,
    },
    Instagram_url: {
        type: String,
        unique: true,
        trim: true,
    },
    Reddit_url: {
        type: String,
        unique: true,
        trim: true,
    },
    Tumbler_url: {
        type: String,
        unique: true,
        trim: true,
    },
    Youtube_url: {
        type: String,
        unique: true,
        trim: true,
    },
    Linkedin_url: {
        type: String,
        unique: true,
        trim: true,
    },
    Pininterest_url: {
        type: String,
        unique: true,
        trim: true,
    },
    Tiktok_url: {
        type: String,
        unique: true,
        trim: true,
    }
   

    
})
module.exports = mongoose.model('Social',Socialmedia_Schema)