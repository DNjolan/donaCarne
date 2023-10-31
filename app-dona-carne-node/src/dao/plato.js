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
    static async daoPostRegistrarPlato({Nombre_Plato, Valor, Descripcion,
        Empleado_id_emplado, plato_orien_id_plato_orien, Tipo_plato_id_tipo_plato}){
        try{
            const resultado = await conexion.query(
                `INSERT INTO plato(Nombre_Plato,
                    Valor, Descripcion, Empleado_id_emplado,
                    plato_orien_id_plato_orien, Tipo_plato_id_tipo_plato)
                    VALUES(?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?);`,
                    [
                        Nombre_Plato, Valor, Descripcion, Empleado_id_emplado,
                        plato_orien_id_plato_orien, Tipo_plato_id_tipo_plato
                    ]
            )
            return resultado[0]
        }catch (err) {
            console.error('Error in daoPostRegistrarPlato:', err);
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

    //-------------------------------------------------------

    // DAO Registrar Plato Orientado - 1
    static async daoPostRegistrarPlatoOrien({plato_orientado}){
    const resultado = await conexion.query(`INSERT INTO plato_orien(plato_orientado) VALUES (?);`,[plato_orientado]);
    console.log('Insert Result:', resultado[0]);  // Add this line to print the result
        return resultado[0];
        } catch (error) {
            console.error('Error in daoPostRegistrarCategoria:', error);  // Print the error message
            return 0;
        
    }
    
    // DAO Obtener plato orientado - 1
    static async daoGetAllPlatoOrien(){
    const resultado = await conexion.query('SELECT * FROM plato_orien',)
    }
    
    // DAO Registrar Tipo Plato - 2
    static async daoPostRegistrarTipoPlato({Plato_categoria, Plato_menu}){
    const resultado = await conexion.query(`INSERT INTO Tipo_plato(Plato_categoria,Plato_menu) VALUES (?,?);`,[Plato_categoria,Plato_menu]);
    }
    
    // DAO Obtener Tipo Plato - 2
    static async daoGetAllTipoPlato(){
    const resultado = await conexion.query('SELECT * FROM Tipo_plato',)
    }
    
}