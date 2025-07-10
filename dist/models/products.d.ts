import { Model } from "sequelize";
declare class Product extends Model {
    id: number;
    title: string;
    price: number;
    description: string;
    image_url: string;
    count: number;
    sku: string;
    is_active: boolean;
    category_id: number;
}
export default Product;
