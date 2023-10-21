import { DatosXDao } from "../dao/obtener_datos_x.js";

export class DatosXController {
    getComuna = async (req, res) => {
        const comuna = await DatosXDao.daoGetComuna()
        if (comuna) return res.json(comuna)
        return res.json({mensaje: 'No existen comunas'})
    }
    
    getRegiones = async (req, res) => {
        const regiones = await DatosXDao.daoGetregiones()
        if (regiones) return res.json(regiones)
        return res.json({mensaje: 'No existen comunas'})
    }
    
    getUltimaDireccion = async (req, res) => {
        const comuna = await DatosXDao.daoGetUltimaDireccion()
        if (comuna) return res.json(comuna[0])
        return res.json({mensaje: 'existe dirección'})
    }
}