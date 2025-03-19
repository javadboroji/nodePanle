import { Model, ModelStatic } from 'sequelize';
import { Request } from 'express';

class baseService {
    private Model: ModelStatic<Model>;
    private Req: Request;

    constructor(model: ModelStatic<Model>, req: Request) {
        this.Model = model;
        this.Req = req;
    }
    async getAll() {
        return await this.Model.findAll();
    }
    async getById(id: number) {
        return await this.Model.findByPk(id);
    }
    async create(data: any) {
        return await this.Model.create(data);
    }
    async update(id: number, data: any) {
        const record = await this.Model.findByPk(id);
        if (!record) return null;
        return await record.update(data);
    }
    async delete(id: number) {
        const record = await this.Model.findByPk(id);
        if (!record) return null;
        await record.destroy();
        return true;
    }
}
export default baseService;