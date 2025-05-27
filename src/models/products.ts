import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.ts";


class Product extends Model{
    public id!: number;
    public title!: string;
    public price!: number;
    public description!: string;
    public image_url!: string;
    public count!: number;
    public sku!: string;
    public is_active!: boolean;
    public category_id!: number; 
 
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
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
    }
);
export default Product;