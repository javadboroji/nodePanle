import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

class post extends Model{
    public id!: number;
    public title!: string;
    public content!: string;
    public category_id!: number;
    public user_id!: number;
    public image_url!: string;
    public status!: boolean;
    public created_at !: Date;
    public updated_at !: Date;
}

post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING      ,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: "posts",
    timestamps: true,  
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
})      

export default post;
