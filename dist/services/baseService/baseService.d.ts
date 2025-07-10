import { Model, ModelStatic } from 'sequelize';
declare class baseService {
    private Model;
    constructor(model: ModelStatic<Model>);
    getAll(): Promise<Model<any, any>[]>;
    getAllWithSearch(search: string, page: number | undefined, size: number | undefined, columns: string[]): Promise<{
        data: Model<any, any>[];
        totalDatas: number;
        totalPages: number;
        currentPage: number;
    }>;
    getById(id: number): Promise<Model<any, any> | null>;
    create(data: any): Promise<Model<any, any>>;
    update(id: number, data: any): Promise<Model<any, any> | null>;
    delete(id: number): Promise<true | null>;
}
export default baseService;
