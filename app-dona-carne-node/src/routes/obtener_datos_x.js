import { Router } from "express";
import { DatosXController } from "../controller/obtener_datos_x.js";

export const createDatosXRouter = () => {
    const datosXRouter = Router()
    const datosXController = new DatosXController()

    datosXRouter.get('/')

    datosXRouter.get('/obtener-comunas', datosXController.getComuna)

    datosXRouter.get('/obtener-regiones', datosXController.getRegiones)
    
    datosXRouter.get('/obtener-ultima-direccion', datosXController.getUltimaDireccion)

    return datosXRouter
}