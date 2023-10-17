import { HuespedDao } from "../dao/huesped.js";

export class HuespedController {
    getUsuarioLogin = async (req, res) => {
        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const usuario = await HuespedDao.daoGetUsuarioLogin({correo, contrasena})
        if (usuario) return res.json(usuario[0])
        return res.json({mensaje:'No existe'})
    }

    postRegistrarHuesped = async (req, res) => {
        const nombre = req.query.nombre
        const apellido_paterno = req.query.apellido_paterno
        const apellido_materno = req.query.apellido_materno
        const rut_hues = req.query.rut_hues
        const nacionalidad_hues = req.query.nacionalidad_hues
        const numero_telefono = req.query.numero_telefono
        const correo = req.query.correo
        const contrasena = req.query.contrasena
        const sexo = req.query.sexo
        const fecha_nacimiento = req.query.fecha_nacimiento
        const direccion_id_direccion = req.query.direccion_id_direccion

        const registro = await HuespedDao.daoPostRegistrarHuesped({nombre,
            apellido_paterno,
            apellido_materno,
            rut_hues,
            nacionalidad_hues,
            numero_telefono,
            correo,
            contrasena,
            sexo,
            fecha_nacimiento,
            direccion_id_direccion
        })
        if (registro) {
            return res.json({mensaje: 'Registrado con exito'})
        }else {
            console.log(registro);
            return res.json({mensaje: 'Error al registrar'})
        }
    }

}