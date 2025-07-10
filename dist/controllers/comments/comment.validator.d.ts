export type commentInput = {
    content: string;
    email: string;
    post_id: number;
};
export declare const validateCreateComment: (body: commentInput) => {
    isValid: boolean;
    message: string;
};
