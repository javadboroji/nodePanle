import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ecommerce", "postgres", "Pp123456!", {
  host: "localhost",
  dialect: "postgres",
});
export default sequelize;