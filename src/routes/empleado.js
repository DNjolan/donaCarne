import { Router } from "express";
import { EmpleadoController } from "../controller/empleado.js"

export const createEmpleadoRouter = () =>{
    const empleadoRouter = Router()
    const empleadoController = new EmpleadoController()

    empleadoRouter.get('/')
    empleadoRouter.get('/inicio-sesion', empleadoController.getUsuarioLogin)
    empleadoRouter.get('/obtener-todos-los-empleados', empleadoController.getEmpleadoAll)
    empleadoRouter.post('/registrar-empleado', empleadoController.postRegistrarEmpleado)

    return empleadoRouter
}
