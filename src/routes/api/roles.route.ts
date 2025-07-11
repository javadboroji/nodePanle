import { Request, Response, Router } from "express";
import RolesController from "../../controllers/roles/roles.controller.ts";
import authenticateToken from "../../middleware/authenticateToken.ts";


const rolesRoutes =Router();

const rolesControllers =new RolesController() ;

rolesRoutes.post("/getAllRoles" ,authenticateToken ,(req :Request ,res :Response)=>{
    rolesControllers.getRolesWithPagnation(req ,res)
})
rolesRoutes.get("/get" ,(req :Request ,res :Response)=>{
    rolesControllers.getAllRoles(req ,res)
})

export default rolesRoutes;