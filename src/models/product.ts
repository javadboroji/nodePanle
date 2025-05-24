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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,       
    }

    },
    {
        sequelize,
        tableName: "products",
            timestamps: true,  
            createdAt: 'created_at', 
            updatedAt: 'updated_at',
              
    }
)