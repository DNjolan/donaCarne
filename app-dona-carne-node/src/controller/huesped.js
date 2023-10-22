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
        const nombre = req.body.nombre
        const apellido_paterno = req.body.apellido_paterno
        const apellido_materno = req.body.apellido_materno
        const rut_hues = req.body.rut_hues
        const nacionalidad_hues = req.body.nacionalidad_hues
        const numero_telefono = req.body.numero_telefono
        const correo = req.body.correo
        const contrasena = req.body.contrasena
        const sexo = req.body.sexo
        const fecha_nacimiento = req.body.fecha_nacimiento
        const direccion_id_direccion = req.body.direccion_id_direccion

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