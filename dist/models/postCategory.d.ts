import { Model } from "sequelize";
declare class PostCategory extends Model {
    id: number;
    title: string;
    persianName: string;
    createdAt: Date;
    updatedAt: Date;
}
export default PostCategory;
