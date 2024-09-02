import Note from "../../../DB/models/notes.model.js"
import User from "../../../DB/models/user.model.js"

export const addNote=async(req,res,next)=>{
    const {title,content,UserEmail}=req.body

    const isEmailExists=await User.findByPk(UserEmail)
    
    if(!isEmailExists){
        return res.json({
            message:"email not found",
            status:404
        })
    }

    const newNote=await Note.create({title,content,UserEmail})

    if(newNote._options.isNewRecord){
        return res.json({
            message:"added successfully",
            status:201
        })
    }
    return res.json({
        message:"added fail",
        status:400
    })
}