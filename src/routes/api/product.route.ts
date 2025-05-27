import { Request, Response, Router } from "express";
import ProductsController from "../../controllers/products/products.controllers.ts";
const productRouter = Router();
const productController =new ProductsController();

productRouter.post("/getAllProduct", (req: Request, res: Response)=>{
    productController.getProducts(req,res);
});
productRouter.post("/addProduct", (req: Request, res: Response)=>{
    productController.addProduct(req,res);
});
export default productRouter;