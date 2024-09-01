import User from "../../../DB/models/user.model.js"

export const getUsers=async(req,res,next)=>{
    const users=await User.findAll()
    return res.json({
        message:"done",
        status:200,
        users
    })
}
export const signUp=async(req,res,next)=>{
    const {name,email,age,password}=req.body
    const isEmailExists=await User.findOne({
        where:{email}
    })
    
    if(isEmailExists){
        return res.json({
            message:"email is already exists",
            status:409
        })
    }
    const newUser=await User.create({name,email,age,password})
    if(newUser._options.isNewRecord){
        return res.json({
            message:"added successfully",
            status:201
        })
    }
    return res.json({
        message:"signup fail",
        status:400
    })
}

export const signin=async(req,res,next)=>{
    const {email,password}=req.body
    const user=await User.findOne({
        where:{email,password}
    })
    
    if(user){
        user.isLoggedIn=true
        await user.save()
        return res.json({
            message:"sign in success",
            status:200
        })
    }

    return res.json({
        message:"sign in fail",
        status:400
    })

}