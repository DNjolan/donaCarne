import { Router } from "express";
import {ProveedorController } from "../controller/proveedor.js";

export const createProveedorRouter = () =>{
    const ProveedorRouter = Router();
    const controller = new ProveedorController(); 

    ProveedorRouter.get('/');

    // Pass parameters ({correo, contrasena})
    ProveedorRouter.get('/todo-proveedor', controller.getAllProveedores); 
    ProveedorRouter.get('/proveedor-id', controller.getIDProveedor); 
    ProveedorRouter.post('/registrar-proveedor', controller.postProveedor); 
    
    
    return ProveedorRouter;



}
