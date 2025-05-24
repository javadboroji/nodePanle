import { DataTypes, Model } from "sequelize";
import sequelize from "../database/possqlDB.ts";


class Product extends Model{
    public id!: number;
    public name!: string;
    public price!: number;
    public description!: string;
    public image!: string;
    public category_id!: number; 

}

Product.init({
    id: {
        type: DataTypes.UUID,
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
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'categories',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',       
    }

    },
    {
        sequelize,
        tableName: "products",
            timestamps: true,  
            createdAt: 'created_at', 
            updatedAt: 'updated_at',
              
    }
);
export default Product;