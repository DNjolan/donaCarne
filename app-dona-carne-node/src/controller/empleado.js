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
        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const permiso = await EmpleadoDao.daoGetUsuarioLogin({ correo, contrasena})

        if(permiso){
            const idPermiso = permiso[0].Rol_id_rol
            const empleado = await EmpleadoDao.daoGetEmpleadoAll()
            console.log(idPermiso);
            console.log(empleado);
            if (empleado && idPermiso === 1) return res.json(empleado)
        }else{
            return res.json({ mensaje: 'No existen empleados' })
        }
        return res.json({ mensaje: 'No existen empleados' })
    }
    
    postRegistrarEmpleado = async (req, res) => {
        const nombre = req.query.nombre
        const apellido_paterno = req.query.apellido_paterno
        const apellido_materno = req.query.apellido_materno
        const numero_telefono = req.query.numero_telefono
        const correoRegistro = req.query.correoRegistro
        const contrasenaRegistro = req.query.contrasenaRegistro
        const fecha_nacimiento = req.query.fecha_nacimiento
        const sexo = req.query.sexo
        const direccion_id_direccion = req.query.direccion_id_direccion
        const rol_id_rol = req.query.rol_id_rol

        const correo = req.query.correo
        const contrasena = req.query.contrasena
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

    postRegistrarCategoria = async (req, res) => {
        const id_categoria = req.query.id_categoria
        const Categoria = req.query.Categoria
        
        const registro_cat = await EmpleadoDao.daoPostRegistrarCategoria({id_categoria,Categoria})
        if (registro_cat == 1){
            return res.json({mensaje: 'Categoria registrada'})
        }else{
            return res.json({mensaje:'Error al registrar Categoria'})
        }
        
        // if(permiso){
        //     const idPermiso = permiso[0].Rol_id_rol
        //     const registro_cat = await EmpleadoDao.daoPostRegistrarCategoria({id_categoria,Categoria})
        //     if (registro_cat && idPermiso == 1){
        //         return res.json({mensaje: 'Categoria registrada'})
        //     }else{
        //         return res.json({mensaje:'Error al registrar Categoria'})
        //     }
        // }else{
        //     return res.json({mensaje:'Error al registrar Categoria -1'})
        // }
    }


}