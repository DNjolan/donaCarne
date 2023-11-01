import { Router } from "express";
import { ComedorController } from "../controller/comedor.js";

export const createComedorRouter = () => {
    const comedorRouter = Router()
    const comedorController = new ComedorController()

    comedorRouter.get('/')

    // Obtener todos los platos
   comedorRouter.get('/obtener-todas-los-platos', comedorController.getAllPlatos)

    // Obtener plato por ID
   comedorRouter.get('/obtener-plato-por-id', comedorController.getIDPlato)


    // Crear plato
    comedorRouter.post('/crear-plato', comedorController.postPlato)

    return comedorRouter
}