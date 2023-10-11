import { EmpleadoDao } from "../dao/empleado.js";

export class EmpleadoController {
    // Controlador para obtener al usuario logeado
    // Pasar parametros {correo, contrasena}
    getUsuarioLogin = async (req, res) => {
        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const usuario = await EmpleadoDao.daoGetUsuarioLogin({correo, contrasena})
        if (usuario) return res.json(usuario[0])
        return res.json({mensaje:'No existe'})
    }

    // Obtener a todos los empleados en modo administrador
    // pasar parametros {correo, contrasena}
    getEmpleadoAll = async (req, res) => {
        console.log('getAllController');
        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const permiso = await EmpleadoDao.daoGetUsuarioLogin({ correo, contrasena})

        if(permiso){
            const idPermiso = permiso[0].Rol_id_rol
            const empleado = await EmpleadoDao.daoGetEmpleadoAll()
            if (empleado && idPermiso === 1) return res.json(empleado[0])
        }else{
            return res.json({ mensaje: 'No existe' })
        }
        return res.json({ mensaje: 'No existe' })
    }
    
    postRegistrarEmpleado = async (req, res) => {
        const nombre = req.query.nombre
        const apellido_paterno = req.query.apellido_paterno
        const apellido_materno = req.query.apellido_materno
        const numero_telefono = req.query.numero_telefono
        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const fecha_nacimiento = req.query.fecha_nacimiento
        const sexo = req.query.sexo
        const direccion_id_direccion = req.query.direccion_id_direccion
        const rol_id_rol = req.query.rol_id_rol
        const registro = await EmpleadoDao.daoPostRegistrarEmpleado({nombre,
            apellido_paterno,
            apellido_materno,
            numero_telefono,
            correo,
            contrasena,
            fecha_nacimiento,
            sexo,
            direccion_id_direccion,
            rol_id_rol
        })
        if (registro) return res.json({mensaje: 'Registrado con exito'})
        return res.json({mensaje: 'Error al registrar'})
    }
}