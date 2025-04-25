import { Model, ModelStatic } from "sequelize";

class commentService<T extends Model> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  /*======================================================= increment Like =======================================================*/

  async likeComment(commentId: number) {
    if (!commentId) return null;

    const comment = await this.model.findByPk(commentId);
    if (!comment) return null;
    comment.setDataValue(
      "likes_count",
      comment.getDataValue("likes_count") + 1
    );
    await comment.save();
    return comment;
  }
  /*======================================================= decrase Like =======================================================*/

  async disLikeComment(commentId: number) {
    if (!commentId) return null;

    const comment = await this.model.findByPk(commentId);
    if (!comment) return null;
    comment.setDataValue(
      "disLikes_count",
      comment.getDataValue("disLikes_count") + 1
    );
    await comment.save();
    return comment;
  }
  /*======================================================= get postComment  =======================================================*/
  async getCommentByPostId(postId: number) {
    const comments = await this.model.findAll({
      where: { post_id: postId as any },
    });

    if (!comments) return null;

    return comments;
  }
}
export default commentService;
