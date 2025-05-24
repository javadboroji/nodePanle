import { DataTypes, Model } from "sequelize";
import sequelize from "../database/possqlDB.ts";


class product extends Model{
    public id!: number;
    public name!: string;
    public price!: number;
    public description!: string;
    public image!: string;
    public categoryId!: number; 

}

product.init({
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // categoryId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,       
    // }

    },
    {
        sequelize,
        tableName: "products",
            timestamps: true,  
            createdAt: 'created_at', 
            updatedAt: 'updated_at',
              
    }
);
export default product;