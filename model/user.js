const { name } = require('ejs')
const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'enter your name']
    },
    email : {
        type : String,
        required : [true,'enter your emailId'],
        unique : [true,'Email already exists. Please use a different one.']
    },
    password : {
        type : String,
        required : [true,'enter your password']
    }




})
module.exports = mongoose.model('user',userschema)