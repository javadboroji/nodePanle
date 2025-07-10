import { Model } from "sequelize";
import { ModelStatic } from "sequelize";
export interface Iuser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user" | "editor";
    status: boolean;
}
declare class AuthService<T extends Model> {
    private model;
    constructor(model: ModelStatic<T>);
    /**=======================
     * Register a new user
     *========================**/
    register(data: Partial<T["_attributes"]>): Promise<{
        user: T | null;
        error: any;
    }>;
    /**=======================
     * Login a user
     *========================**/
    login(data: Partial<T["_attributes"]>): Promise<{
        user: T | null;
        error: any;
    }>;
    /**=======================
     * Check if user exists
     *========================**/
    checkUserExists(id: number): Promise<{
        user: T | null;
        error: any;
    }>;
}
export default AuthService;
