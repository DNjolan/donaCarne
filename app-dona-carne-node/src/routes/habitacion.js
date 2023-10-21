import { Router } from "express";
import { HabitacionController } from "../controller/habitacion.js";

export const createHabitacionRouter = () => {
    const habitacionRouter = Router()
    const habitacionController = new HabitacionController()

    habitacionRouter.get('/')

    // Obtener todas las habitaciones
    habitacionRouter.get('/obtener-todas-las-habitaciones', habitacionController.getAllHabitaciones)

    // Obtener habitación por ID
    habitacionRouter.get('/obtener-habitacion-por-id', habitacionController.getIDHabitacion)

    // Crear habitación
    habitacionRouter.post('/crear-habitacion', habitacionController.postHabitacion)

    // Actualizar habitación
    habitacionRouter.put('/actualizar-habitacion', habitacionController.updateHabitacion)

    // Eliminar habitación
    habitacionRouter.delete('/eliminar-habitacion', habitacionController.deleteHabitacion)

    return habitacionRouter
}