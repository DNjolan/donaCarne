import { Router } from "express";
import { EmpleadoController } from "../controller/empleado.js"

export const createEmpleadoRouter = () =>{
    const empleadoRouter = Router()
    const empleadoController = new EmpleadoController()

    empleadoRouter.get('/')

    // Pasar paremetros ({correo, contrasena})
    empleadoRouter.get('/inicio-sesion', empleadoController.getUsuarioLogin)

    // Pasar paremetros ({correo, contrasena})
    empleadoRouter.get('/obtener-todos-los-empleados', empleadoController.getEmpleadoAll)
    1
    // Pasar paremetros ({nombre, apellido_paterno, apellido_materno, numero_telefono,
    //                      correoRegistro, contrasenaRegistro, fecha_nacimiento,
    //                      sexo, direccion_id_direccion, rol_id_rol,
    //                      correo, contrasena
    //                      })
    empleadoRouter.post('/registrar-empleado', empleadoController.postRegistrarEmpleado)

    // Registrar parametros({id_categoria, Categoria})
    empleadoRouter.post('/ordenes',empleadoController.postRegistrarCategoria)

    return empleadoRouter
}
