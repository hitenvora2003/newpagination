const user = require('../model/user')
const jwt = require('jsonwebtoken')

exports.authcheck = async(req,res,next)=>{
    try{
       const token = req.headers.authorization
       if(!token)throw new Error('please attach token')
       
      const tokenverify = jwt.verify(token,'ten')
      console.log(tokenverify);
      if(!tokenverify)throw new Error('invalid token')

      const userVerify = await user.findById(tokenverify.id);
    // console.log(userVerify);

    if(!userVerify) throw new Error('Invalid User')
        
     next()
      

    }catch(error){
      res.status(500).json({
      status: "Failed",
      message: error.message
    });
    }
}