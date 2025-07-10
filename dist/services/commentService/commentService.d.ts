import { Model, ModelStatic } from "sequelize";
declare class commentService<T extends Model> {
    private model;
    constructor(model: ModelStatic<T>);
    likeComment(commentId: number): Promise<T | null>;
    disLikeComment(commentId: number): Promise<T | null>;
    getCommentByPostId(postId: number): Promise<T[] | null>;
}
export default commentService;
