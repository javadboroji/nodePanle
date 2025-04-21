import Comment from "../../models/comments.js";

export type commentInput =Pick<Comment,"email"|"parent_id"|"posts_id"|"content">

export const validateCreateComment =(body:commentInput)=>{
    if(!body.content || !body.email ||!body.posts_id){
        return {
            isValid:false,
            message:"body.content || body.email ||body.posts_id  Is Required"
        }
    }

    return {
        
            isValid:true,
            message:"isValid"
        
    }
}