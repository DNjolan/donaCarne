import { PlatoDao } from "../dao/plato.js";

export class PlatoController {
    // Controller Ver Todos los Platos
    getAllPlatos = async (req, res) => {
        const resultado = await PlatoDao.daoGetAllPlatos()
        if (resultado) return res.json(resultado)
        return res.json({mensaje: 'No existen platos'})

    }

    // Controller Registrar plato
    postRegistrarPlato = async(req, res) => {
        const Nombre_Plato = req.body.Nombre_Plato
        const Valor = req.body.Valor
        const Descripcion = req.body.Descripcion
        const Empleado_id_emplado = req.body.Empleado_id_emplado
        const plato_orien_id_plato_orien = req.body.plato_orien_id_plato_orien
        const Tipo_plato_id_tipo_plato = req.body.Tipo_plato_id_tipo_plato
        
        try {
            const registro = await PlatoDao.daoPostRegistrarPlato({Nombre_Plato, 
                Valor, 
                Descripcion, 
                Empleado_id_emplado, 
                plato_orien_id_plato_orien, 
                Tipo_plato_id_tipo_plato})
            if (registro) {
                console.log('Plato registrado')
                return res.json({ mensaje: 'Plato registrado' })
            } else {
                console.log('Error al registrar Plato')
                return res.json({ mensaje: 'Error al registrar Plato' })
            }
        } catch (error) {
            console.log('Databse error')
            console.error('Database Error:', error)
            return res.status(500).json({ mensaje: 'Error de base de datos' })
        }
    
    }

    // Controller Actualizar plato
    updatePlato = async(req, res) => {
        const Nombre_Plato = req.body.Nombre_Plato
        const Valor = req.body.Valor
        const Empleado_id_emplado = req.body.Empleado_id_emplado
        const plato_orien_id_plato_orien = req.body.plato_orien_id_plato_orien
        const Tipo_plato_id_tipo_plato = req.body.Tipo_plato_id_tipo_plato
        const id_plato = req.body.id_plato
        
        try {
            const registro_cat = await PlatoDao.daoUpdatePlato({Nombre_Plato,Valor,Empleado_id_emplado,Imagen,plato_orien_id_plato_orien,Tipo_plato_id_tipo_plato,id_plato})
            if (registro_cat === 0) {
                console.log('Plato registrado');
                return res.json({ mensaje: 'Plato registrado' })
            } else {
                console.log('Error al registrar Plato')
                return res.json({ mensaje: 'Error al registrar Plato' })
            }
        } catch (error) {
            console.log('Databse error')
            console.error('Database Error:', error)
            return res.status(500).json({ mensaje: 'Error de base de datos' })
        }
    
    }

    // Controllador Borrar Plato
    deletePlato = async (req, res) => {
        const id_plato = req.body.id_plato
        const resultado = await PlatoDao.daoDeletePlato({id_plato})
        if (resultado == 1 ) {
            return res.json({mensaje: 'Eliminado con exito'})
        } else {
            return res.json({mensaje: 'Error al borrar plato'})
        }
       
    }
}