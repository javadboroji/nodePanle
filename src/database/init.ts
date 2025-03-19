import sequelize from "./db.js";
import User from "../models/users.js";
async function initDB () {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected successfully.");
    
        await sequelize.sync({ alter: true }); 
        console.log("✅ All models were synchronized.");
      } catch (error) {
        console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);
        console.error("❌ Database connection failed:", error);
      }
}

export default initDB;
