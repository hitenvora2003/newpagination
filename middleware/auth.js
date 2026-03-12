
const jwt = require('jsonwebtoken')

exports.authcheck = async(req,res,next)=>{
    try{
       const token = req.headers.authorization
       if(!token)throw new Error('please attach token')
       
      const tokenverify = jwt.verify(token,'ten')
      console.log(tokenverify);
      if(!tokenverify)throw new Error('invalid token')
        
     next()
      

    }catch(error){
      res.status(500).json({
      status: "Failed",
      message: error.message
    });
    }
}