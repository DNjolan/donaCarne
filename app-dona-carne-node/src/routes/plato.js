import { Router } from "express";
import { PlatoController } from "../controller/plato.js";

export const createPlatoRouter = () =>{
    const platoRouter = Router()
    const platoController = new PlatoController()

    platoRouter.get('/')
    
    // Routes - Ver todos los platos
    platoRouter.get('/ver-platos', platoController.getAllPlatos)
    
    // Routes - Registrar un plato
    platoRouter.post('/registrar-plato', platoController.postRegistrarPlato)
    
    // Routes - Actualizar un plato
    platoRouter.put('/act-plato', platoController.updatePlato)
    
    // Routes - Borrar un plato
    platoRouter.delete('/delete-plato', platoController.deletePlato)

    
    // Routes - Ver Plato Orientado - 1
    platoRouter.get('/ver-plato-orien', platoController.getAllPlatoOrien)
        
    // Routes - Registrar nuevo Plato Orientado - 1
    platoRouter.post('/new-plato-orien', platoController.postRegistrarPlatoOrien)

    // Routes - Ver los tipos de Platos - 2
    platoRouter.get('/tipo-plato', platoController.getAllTipoPlato)
        
    // Routes - Registrar los tipos de Platos - 2
    platoRouter.post('/new-tipo-plato', platoController.postRegistrarTipoPlato)

    return platoRouter
}