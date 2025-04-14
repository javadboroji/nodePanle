import { Model, ModelStatic, Op } from 'sequelize';
import { Request } from 'express';

class baseService {
    private Model: ModelStatic<Model>;

    constructor(model: ModelStatic<Model>) {
        this.Model = model;
    }
    async getAll() {
        return await this.Model.findAll();
    }

   /*=========================================== Get With Pagnation and Search ===========================================*/
   
    
    async getAllWithSearch(search: string, page: number = 1, size: number = 10, columns: string[]) {
        const offset = (page - 1) * size;
        //* search is optional
        var whereClause = {}
        if(search)  whereClause = {
            [Op.or]: columns.map((column) => ({
              [column]: { [Op.like]: `%${search}%` },
            })),
          };
        //* get all data with pagination
        const data = await this.Model.findAll({
            where: whereClause || {},
            offset,
            limit: size,
        });
        
        const totalDatas = await this.Model.count({ where:whereClause || {} });
        const totalPages = Math.ceil(totalDatas / size);

        //* return data with pagination
        return { data, totalDatas, totalPages, currentPage: page };
    }

  /*=========================================== Get By ID ===========================================*/
  
    
    async getById(id: number) {
        return await this.Model.findByPk(id);
    }


  /*=========================================== Create ===========================================*/
  
    
    async create(data: any) {
        return await this.Model.create(data);
    }

    /*=========================================== Update ===========================================*/
    
    
    async update(id: number, data: any) {
        const record = await this.Model.findByPk(id);
        if (!record) return null;
        return await record.update(data);
    }

    /*=========================================== Delete ===========================================*/
    
    
    async delete(id: number) {
        const record = await this.Model.findByPk(id);
        if (!record) return null;
        await record.destroy();
        return true;
    }
}
export default baseService;