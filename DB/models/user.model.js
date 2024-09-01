import { DataTypes} from "sequelize";
import { sequelize_config } from "../connection.js";

const User=sequelize_config.define('User',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    isLoggedIn:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }


},{timestamps:true})

export default User