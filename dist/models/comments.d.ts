import { Model } from "sequelize";
declare class Comment extends Model {
    id: number;
    post_id: number;
    email: string;
    content: string;
    status: boolean;
    parent_id: number | null;
    likes_count: number;
    dislikes_count: number;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default Comment;
