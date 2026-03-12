const user = require('../model/account')



exports.createdata = async(req,res)=>{
    try{
       let passdata = req.body
      
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
