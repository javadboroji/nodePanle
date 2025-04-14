import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

class Comment extends Model {
  public id!: number;
  public posts_id!: number;
  public email!: string;
  public content!: string;
  public status!: boolean;
  public parent_id!: number;
  public like_count!: number;
  public dislikes_count!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    posts_id: {
      type: DataTypes.INTEGER,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
  
    },

    like_count: {
      type: DataTypes.INTEGER,
    },
    dislikes_count: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "Comments",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
