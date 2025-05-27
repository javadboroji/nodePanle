import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

class roles extends Model{
    public id!: number;
    public title!: string;
    public name!: string;


    
}


roles.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: "roles",
    timestamps: true,  
});

export default roles ;
