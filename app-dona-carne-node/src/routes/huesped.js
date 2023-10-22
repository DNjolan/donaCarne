import { Router } from "express";
import { HuespedController } from "../controller/huesped.js"

export const createHuespedRouter = () =>{
    const huespedRouter = Router()
    const huespedController = new HuespedController()

    huespedRouter.get('/')
    // pasar parametros ({correo, contrasena})
    huespedRouter.get('/iniciar-sesion', huespedController.getUsuarioLogin)

    // pasar parametros ({Nombre_huesped, Apellido_paterno_hues,
    //      Apellido_materno_hues, Rut_hues, Nacionalidad_hues,
    //      Telefono_hues, Correo_hues, contrasena_hues,
    //      Sexo_hues, Fecha_nacimiento_hues})
    huespedRouter.post('/registrar-huesped', huespedController.postRegistrarHuesped)
    
    return huespedRouter
}
