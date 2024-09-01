import User from "../../../DB/models/user.model.js"

export const getUsers=async(req,res,next)=>{
    const users=await User.findAll()
    return res.json({
        message:"done",
        status:200,
        users
    })
}