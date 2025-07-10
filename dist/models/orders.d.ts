import { Model } from "sequelize";
declare class orders extends Model {
    id: number;
    title: string;
    name: string;
}
export default orders;
