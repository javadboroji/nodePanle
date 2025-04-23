
export type commentInput = {
  content: string;
  email: string;
  post_id: number;
};

export const validateCreateComment = (body: commentInput) => {
  if (!body.content || !body.email || !body.post_id) {
    return {
      isValid: false,
      message: "body.content || body.email ||body.posts_id  Is Required",
    };
  }

  return {
    isValid: true,
    message: "isValid",
  };
};
