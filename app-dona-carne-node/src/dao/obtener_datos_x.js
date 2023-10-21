import { conexion } from "./bdd.js";

export class DatosXDao {
    static async daoGetComuna(){
        const resultado = await conexion.query(
            'SELECT * FROM comuna;'
        )
        if (resultado[0]) return resultado[0]
        return null
    }
    
    static async daoGetregiones(){
        const resultado = await conexion.query(
            'SELECT * FROM ciudad;'
        )
        if (resultado[0]) return resultado[0]
        return null
    }

    static async daoGetUltimaDireccion(){
        const resultado = await conexion.query(
            'SELECT MAX(id_direccion) AS id_direccion FROM direccion;'
        )
        if (resultado[0]) return resultado[0]
        return null
    }
}
