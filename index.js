import express from "express"
import { db_connection } from "./DB/connection.js"
import userRouter from "./SRC/Modules/User/user.routes.js"
import notesRouter from "./SRC/Modules/Notes/notes.routes.js"

const app=express()
const port=3000

app.use(express.json())
db_connection()
app.use('/user',userRouter)
app.use('/notes',notesRouter)

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
    
})