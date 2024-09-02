import { DataTypes, INTEGER} from "sequelize";
import { sequelize_config } from "../connection.js";
import User from "./user.model.js";

const Note=sequelize_config.define('Note',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING
    }
},{timestamps:true})

User.hasMany(Note)
Note.belongsTo(User)

export default Note