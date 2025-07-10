import { Model } from "sequelize";
declare class roles extends Model {
    id: number;
    title: string;
    name: string;
}
export default roles;
