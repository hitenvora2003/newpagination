const { name } = require('ejs')
const mongoose = require('mongoose')
const accountschema = new mongoose.Schema({
    name : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
       
    },
    account_NO : {
        type : Number,
        required : [true,'enter your account number'],
      
    },
    balance : {
        type : String,
        required : [true,'enter your balance']
    }




})
module.exports = mongoose.model('account',accountschema)