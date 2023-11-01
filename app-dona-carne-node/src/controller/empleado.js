import { EmpleadoDao } from "../dao/empleado.js";

export class EmpleadoController {
    // Controlador para obtener al usuario logeado
    // Pasar parametros {correo, contrasena}
    getUsuarioLogin = async (req, res) => {
        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const usuario = await EmpleadoDao.daoGetUsuarioLogin({correo, contrasena })
        if (usuario) return res.json(usuario[0])
        return res.json({mensaje:'No existe'})
    }

    // Obtener a todos los empleados en modo administrador
    // pasar parametros {correo, contrasena}
    getEmpleadoAll = async (req, res) => {
        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const permiso = await EmpleadoDao.daoGetUsuarioLogin({ correo, contrasena})

        if(permiso){
            const idPermiso = permiso[0].Rol_id_rol
            const empleado = await EmpleadoDao.daoGetEmpleadoAll()
            if (empleado && idPermiso === 1 || idPermiso === 2) return res.json(empleado)
        }else{
            return res.json({ mensaje: 'No existen empleados' })
        }
        return res.json({ mensaje: 'No existen empleados' })
    }
    
    postRegistrarEmpleado = async (req, res) => {
        const nombre = req.body.nombre
        const apellido_paterno = req.body.apellido_paterno
        const apellido_materno = req.body.apellido_materno
        const numero_telefono = req.body.numero_telefono
        const correoRegistro = req.body.correoRegistro
        const contrasenaRegistro = req.body.contrasenaRegistro
        const fecha_nacimiento = req.body.fecha_nacimiento
        const sexo = req.body.sexo
        const direccion_id_direccion = req.body.direccion_id_direccion
        const rol_id_rol = req.body.rol_id_rol

        const correo = req.body.correo
        const contrasena = req.body.contrasena
        const permiso = await EmpleadoDao.daoGetUsuarioLogin({ correo, contrasena})

        if(permiso){
            const idPermiso = permiso[0].Rol_id_rol
            const registro = await EmpleadoDao.daoPostRegistrarEmpleado({nombre,
                apellido_paterno,
                apellido_materno,
                numero_telefono,
                correoRegistro,
                contrasenaRegistro,
                fecha_nacimiento,
                sexo,
                direccion_id_direccion,
                rol_id_rol
            })
            if (registro && idPermiso === 1) {
                return res.json({mensaje: 'Registrado con exito'})
            }else {
                return res.json({mensaje: 'Error al registrar'})
            }
        }else{
            return res.json({mensaje: 'Error al registrar'})
        }
    }
}