import { PostDatosXDao } from "../dao/post_datos_x.js";

export class PostDatosXController {
    postDireccion = async (req, res) => {
        const direccion = req.query.direccion
        const comuna_id_comuna = req.query.comuna_id_comuna
        const numero_direccion = req.query.numero_direccion

        const resultado = await PostDatosXDao.daoPostDireccion({ direccion, comuna_id_comuna, numero_direccion })
        if (resultado) return res.json({mensaje: 'Registrado con exito'})
        return res.json({mensaje: 'Error al registrar'})
    }
}