import { conexion } from "./bdd.js";

export class HabitacionDao {
    // Obtener todas las habitaciones
    static async daoGetAllHabitacion() {
        const resultado = await conexion.query(
            'SELECT * FROM reg_habitacion;'
        )
        if (resultado[0]) return resultado[0]
        return null
    }
    
    // Obtener todas las habitaciones por ID
    static async daoGetForIDHabitacion({id_reg_habi}) {
        const resultado = await conexion.query(
            'SELECT * FROM reg_habitacion WHERE id_reg_habi = ?;',
            [id_reg_habi]
        )
        if (resultado[0]) return resultado[0]
        return null
    }

    // Crear habitación
    static async daoPostHabitacion({dormitorios,
                                    banos,
                                    cama_matrimonial,
                                    cama_individual,
                                    descripcion,
                                    precio,
                                    estado_habi_id_estado_habi,
                                    empleado_id_emplado}) {
        try {
            const resultado = await conexion.query(
                `INSERT INTO reg_habitacion(Dormitorios,
                    Baños,
                    Cama_matrimonial,
                    Cama_individual,
                    Descripcion,
                    Precio,
                    Estado_habi_id_estado_habi,
                    Empleado_id_emplado)
                    VALUES(?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?);`,
                [
                    dormitorios,
                    banos,
                    cama_matrimonial,
                    cama_individual,
                    descripcion,
                    precio,
                    estado_habi_id_estado_habi,
                    empleado_id_emplado
                ]
            )
            return resultado[0]
        } catch (err) {
            console.log('Error', err);
            return 0
        }
        
    }
    
    // Actualizar habitación
    static async daoUpdateHabitacion({dormitorios,
                                        banos,
                                        cama_matrimonial,
                                        cama_individual,
                                        descripcion,
                                        precio,
                                        estado_habi_id_estado_habi,
                                        empleado_id_emplado,
                                        id_reg_habi}) {
        try {
            const resultado = await conexion.query(
                `UPDATE reg_habitacion
                    SET Dormitorios = ?,
                        Baños = ?,
                        Cama_matrimonial = ?, 
                        Cama_individual = ?,
                        Descripcion = ?,
                        Precio = ?,
                        Estado_habi_id_estado_habi = ?,
                        Empleado_id_emplado = ?
                    WHERE
                        id_reg_habi = ?;`,
                [
                    dormitorios,
                    banos,
                    cama_matrimonial,
                    cama_individual,
                    descripcion,
                    precio,
                    estado_habi_id_estado_habi,
                    empleado_id_emplado,
                    id_reg_habi
                ]
            )
            return resultado[0]
        } catch (err) {
            console.log('Error', err);
            return 0
        }
    }
    
    // Eliminar habitación
    static async daoDeleteHabitacion({id_reg_habi}) {
        const resultado = await conexion.query(
            'DELETE FROM reg_habitacion WHERE id_reg_habi = ?;',
            [id_reg_habi]
        )
        if (resultado[0]) return resultado[0]
        return null
    }

    // Obtener el estado de la habitacion
    static async daoGetAllEstadoHabi() {
        const resultado = await conexion.query(
            'SELECT * FROM estado_habi;'
        )
        if (resultado[0]) return resultado[0]
        return null
    }
}