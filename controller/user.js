const user = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.createdata = async(req,res)=>{
    try{
       let passdata = req.body
       passdata.password = await bcrypt.hash(passdata.password,10)
       const data = await user.create(passdata)
       console.log(data)
       res.status(200).json({
          status :"success",
          Message : "data create successfully",
          data : data
       })
       
    }
    catch(error){
       res.status(500).json({
          status :"failed",
          message : error.message
          
       })
    }
}
exports.login = async(req,res)=>{
    try{
       let passdata = req.body
       emailverify = await user.findOne({
        $or : [
            {name : passdata.name},
            {email : passdata.email},
             
            ]
       })
       console.log(emailverify);
       if(!emailverify) throw new Error('invalid name or email')

    const passverify = await bcrypt.compare(
        passdata.password,
        emailverify.password

    )
     if(!passverify) throw new Error('invalid password')
    console.log(passverify);
    
    const token = jwt.sign({id:emailverify._id},"ten")
     
     res.status(200).json({
          status :"success",
          message : "user login successfully",
          data : emailverify,token
     })
       
    }catch(error){

         res.status(500).json({
         status :"failed",
         message : error.message          
       })
    }
}