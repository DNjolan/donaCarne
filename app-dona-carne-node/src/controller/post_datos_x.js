import { PostDatosXDao } from "../dao/post_datos_x.js";

export class PostDatosXController {
    postDireccion = async (req, res) => {
        const direccion = req.body.direccion
        const comuna_id_comuna = req.body.comuna_id_comuna
        const numero_direccion = req.body.numero_direccion

        const resultado = await PostDatosXDao.daoPostDireccion({ direccion, comuna_id_comuna, numero_direccion })
        if (resultado) return res.json({mensaje: 'Registrado con exito'})
        return res.json({mensaje: 'Error al registrar'})
    }
}