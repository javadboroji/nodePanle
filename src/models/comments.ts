import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

class Comment extends Model {
  public id!: number;
  public post_id!: number;
  public email!: string;
  public content!: string;
  public status!: boolean;
  public parent_id!: number |null;
  public likes_count!: number;
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
    post_id: {
      type: DataTypes.INTEGER,
      allowNull:false
      
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
      defaultValue:false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      defaultValue:null
  
    },

    likes_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    dislikes_count: {
      type: DataTypes.INTEGER,
      defaultValue:0
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
export default Comment
