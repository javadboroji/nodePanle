import { Model } from "sequelize";
declare class User extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user" | "editor";
    status: boolean;
}
export default User;
