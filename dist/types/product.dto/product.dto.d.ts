export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    sku: number | string;
    count: number;
    rating: number;
    is_active: boolean;
    image_url: string;
    category_id: number;
}
export type productDTO = Omit<Product, "id" | "sku" | "rating">;
