const user = require("../model/user");
const account = require("../model/account");

exports.getalldata = async(req,res)=>{
    try{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const types = req.query.type

    if(!types){
        const [users,accounts] = await Promise.all([
        user.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        account.find().populate("name").sort({ createdAt: -1 }).skip(skip).limit(limit),
        ]);
          return res.status(200).json({
        status: "success",
        page,
        limit,
        data: {
          users,
          accounts
         
        }
      });
    }
  

    }catch(error){
      res.status(500).json({
      status: "fail",
      message: error.message
    });
    }
}