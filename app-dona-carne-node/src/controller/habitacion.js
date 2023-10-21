import { HabitacionDao } from "../dao/habitacion.js";
import { EmpleadoDao } from "../dao/empleado.js";

export class HabitacionController {
    // Obtener todas las habitaciones
    getAllHabitaciones = async (req, res) => {
        const resultado = await HabitacionDao.daoGetAllHabitacion()
        if (resultado) return res.json(resultado[0])
        return res.json({mensaje: 'No existen habitaciones'})
    }

    getIDHabitacion = async (req, res) => {
        const id_reg_habi = req.query.id_reg_habi

        const resultado = await HabitacionDao.daoGetForIDHabitacion({id_reg_habi})
        if (resultado) return res.json(resultado[0])
        return res.json({mensaje: 'No existe habitación'})
    }

    postHabitacion = async (req, res) => {
        const dormitorios = req.query.dormitorios
        const banos = req.query.banos
        const cama_matrimonial = req.query.cama_matrimonial
        const cama_individual = req.query.cama_individual
        const descripcion = req.query.descripcion
        const precio = req.query.precio
        const estado_habi_id_estado_habi = req.query.estado_habi_id_estado_habi
        const empleado_id_emplado = req.query.empleado_id_emplado

        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const permiso = await EmpleadoDao.daoGetUsuarioLogin({ correo, contrasena})

        if (permiso) {
            const idPermiso = permiso[0].Rol_id_rol
            const resultado = await HabitacionDao.daoPostHabitacion({dormitorios,
                banos,
                cama_matrimonial,
                cama_individual,
                descripcion,
                precio,
                estado_habi_id_estado_habi,
                empleado_id_emplado
            })
            console.log(idPermiso);
            console.log(resultado);
            if (resultado && idPermiso === 1 || idPermiso === 2) {
                return res.json({mensaje: 'Registrado con exito'})
            } else {
                return res.json({mensaje: 'Error al registrar'})
            }
        } else {
            return res.json({mensaje: 'Error al registrar'})
        }
    }
    
    updateHabitacion = async (req, res) => {
        const dormitorios = req.query.dormitorios
        const banos = req.query.banos
        const cama_matrimonial = req.query.cama_matrimonial
        const cama_individual = req.query.cama_individual
        const descripcion = req.query.descripcion
        const precio = req.query.precio
        const estado_habi_id_estado_habi = req.query.estado_habi_id_estado_habi
        const empleado_id_emplado = req.query.empleado_id_emplado
        const id_reg_habi = req.query.id_reg_habi

        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const permiso = await EmpleadoDao.daoGetUsuarioLogin({ correo, contrasena})

        if (permiso) {
            const idPermiso = permiso[0].Rol_id_rol
            const resultado = await HabitacionDao.daoUpdateHabitacion({dormitorios,
                banos,
                cama_matrimonial,
                cama_individual,
                descripcion,
                precio,
                estado_habi_id_estado_habi,
                empleado_id_emplado,
                id_reg_habi
            })
            console.log(idPermiso);
            console.log(resultado);
            if (resultado && idPermiso === 1 || idPermiso === 2) {
                return res.json({mensaje: 'Registrado con exito'})
            } else {
                return res.json({mensaje: 'Error al registrar'})
            }
        } else {
            return res.json({mensaje: 'Error al registrar'})
        }
    }
    
    deleteHabitacion = async (req, res) => {
        const id_reg_habi = req.query.id_reg_habi

        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const permiso = await EmpleadoDao.daoGetUsuarioLogin({ correo, contrasena})

        if (permiso) {
            const idPermiso = permiso[0].Rol_id_rol
            const resultado = await HabitacionDao.daoDeleteHabitacion({id_reg_habi})
            console.log(idPermiso);
            console.log(resultado);
            if (resultado && idPermiso === 1 || idPermiso === 2) {
                return res.json({mensaje: 'Registrado con exito'})
            } else {
                return res.json({mensaje: 'Error al registrar'})
            }
        } else {
            return res.json({mensaje: 'Error al registrar'})
        }
    }
}