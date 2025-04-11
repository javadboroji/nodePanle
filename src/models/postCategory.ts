import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

class PostCategory extends Model {
    public id!: number;
    public title!: string;
    public persianName!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}


PostCategory.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    persianName: {
        type: DataTypes.STRING(255),
    },
}, {
    sequelize,
    tableName:"categories",
   
});

export default PostCategory;
