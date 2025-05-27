import { Request, Response, Router } from "express";
import RolesController from "../../controllers/roles/roles.controller.ts";


const rolesRoutes =Router();

const rolesControllers =new RolesController() ;

rolesRoutes.post("/getAllRoles" ,(req :Request ,res :Response)=>{
    rolesControllers.getRolesWithPagnation(req ,res)
})

export default rolesRoutes;