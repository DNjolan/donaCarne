import { conexion } from "./bdd.js";

export class PostDatosXDao {
    static async daoPostDireccion({direccion, comuna_id_comuna, numero_direccion}) {
        try {
            const resultado = await conexion.query(
                `INSERT INTO direccion(Direccion, Comuna_id_comuna, Numero_direccion)
                    VALUES(?, ?, ?);`,
                    [
                        direccion, comuna_id_comuna, numero_direccion
                    ]
            )
            return resultado[0]
        } catch (err){
            console.log('dao', err);
            return 0
        }
    }
}
