import { Sequelize } from "sequelize";

export const sequelize_config = new Sequelize('assignment5', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });

export const db_connection=async()=>{
    await sequelize_config.sync({alter:true,force:false})
    .then(res=>console.log("db connection success"))
    .catch(err=>console.log("db connection fail"))
    
}