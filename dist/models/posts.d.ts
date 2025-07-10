import { Model } from "sequelize";
declare class post extends Model {
    id: number;
    title: string;
    content: string;
    category_id: number;
    user_id: number;
    image_url: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
}
export default post;
