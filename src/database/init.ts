import sequelize from "./db.js";

async function initDB () {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected successfully.");
    
        //await sequelize.sync({ alter: true }); 
        console.log("✅ All models were synchronized.");
      } catch (error) {
        console.error("❌ Database connection failed:", error);
      }
}

export default initDB;
