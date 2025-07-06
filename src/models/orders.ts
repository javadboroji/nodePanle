import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

class orders extends Model {
    public id!: number;
    public title!: string;
    public name!: string;
}


orders.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: false,
    },
    uesr_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',

    },
}, {
    sequelize,
    tableName: "roles",
    timestamps: true,
});

export default orders;
