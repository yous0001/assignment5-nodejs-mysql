import express from "express"
import { db_connection } from "./DB/connection.js"
import userRouter from "./SRC/Modules/User/user.routes.js"

const app=express()
const port=3000

app.use(express.json())
db_connection()
app.use('/user',userRouter)

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
    
})