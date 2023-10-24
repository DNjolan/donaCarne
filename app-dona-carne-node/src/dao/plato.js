import { conexion } from "./bdd.js";

export class PlatoDao {
    //Obtener todos los platos
    static async daoGetAllPlatos(){
        const resultado = await conexion.query(
            'SELECT * FROM plato',
        )
        if (resultado[0]) return resultado[0]
        return null
    }

    //Registrar plato
    static async daoPostPlato({id_plato,
                                Nombre_Plato,
                                Valor,
                                Descripcion,
                                Empleado_id_emplado,
                                plato_orien_id_plato_orien,
                                Tipo_plato_id_tipo_plato}){
        try{
            const resultado = await conexion.query(
                `INSERT INTO reg_habitacion(id_plato,
                    Nombre_Plato,
                    Valor,
                    Descripcion,
                    Empleado_id_emplado,
                    plato_orien_id_plato_orien,
                    Tipo_plato_id_tipo_plato)
                    VALUES(?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?);`,
                    [
                        id_plato,
                        Nombre_Plato,
                        Valor,
                        Descripcion,
                        Empleado_id_emplado,
                        plato_orien_id_plato_orien,
                        Tipo_plato_id_tipo_plato
                    ]
            )
            console.log('Insert Result:', resultado[0]);
            return resultado[0]
        }catch (err) {
            console.error('Error in daoPostRegistrarPlato:', error);
            return 0
        }
    }

    //Registrar plato
    static async daoPostRegistrarPlato({id_plato,
                                Nombre_Plato,
                                Valor,
                                Descripcion,
                                Empleado_id_emplado,
                                plato_orien_id_plato_orien,
                                Tipo_plato_id_tipo_plato}){
        try{
            const resultado = await conexion.query(
                `INSERT INTO plato(id_plato,
                    Nombre_Plato,
                    Valor,
                    Descripcion,
                    Empleado_id_emplado,
                    plato_orien_id_plato_orien,
                    Tipo_plato_id_tipo_plato)
                    VALUES(?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?);`,
                    [
                        id_plato,
                        Nombre_Plato,
                        Valor,
                        Descripcion,
                        Empleado_id_emplado,
                        plato_orien_id_plato_orien,
                        Tipo_plato_id_tipo_plato
                    ]
            )
            console.log('Insert Result:', resultado[0]);
            return resultado[0]
        }catch (err) {
            console.error('Error in daoPostRegistrarPlato:', error);
            return 0
        }
    }

    //Actualizar plato
    static async daoUpdatePlato({
                                Nombre_Plato,
                                Valor,
                                Descripcion,
                                Empleado_id_emplado,
                                plato_orien_id_plato_orien,
                                Tipo_plato_id_tipo_plato,
                                id_plato}){
                        try{
                        const resultado = await conexion.query(
                        `UPDATE plato
                        SET Nombre_Plato = ?,
                        Valor = ?,
                        Descripcion = ?,
                        Empleado_id_emplado = ?,
                        plato_orien_id_plato_orien = ?,
                        Tipo_plato_id_tipo_plato =?)
                        WHERE id_plato = ?`,
                        [
                            Nombre_Plato,
                            Valor,
                            Descripcion,
                            Empleado_id_emplado,
                            plato_orien_id_plato_orien,
                            Tipo_plato_id_tipo_plato,
                            id_plato
                        ]
        )
        console.log('Insert Result:', resultado[0]);
        return resultado[0]
        }catch (err) {
            console.error('Error in daoPostRegistrarPlato:', error);
            return 0
        }
    }

    // Eliminar plato
    static async daoDeletePlato({id_plato}) {
        const resultado = await conexion.query(
            'DELETE FROM plato WHERE id_plato = ?;',
            [id_plato]
        )
        if (resultado[0]) return resultado[0]
        return null
    }
    
}