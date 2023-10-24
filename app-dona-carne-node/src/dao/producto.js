import { conexion } from "./bdd.js";

export class ProductoDao {
    // Dao Obtener todos los productos
    static async daoGetAllProductos(){
        const resultado = await conexion.query(
            'SELECT * FROM producto',
        )
        if (resultado[0]) return resultado[0]
        return null
    }

    // Dao Registrar producto
    static async daoPostRegistrarProducto({id_producto,
                Nombre_pro,
                Valor_pro,
                Imagen_pro,
                Descripcion_pro,
                Cate_producto_id}) {
        try {
        const resultado = await conexion.query(
        `INSERT INTO producto(id_producto,
            Nombre_pro,
            Valor_pro,
            Imagen_pro,
            Descripcion_pro,
            Cate_producto_id) VALUES (?,?,?,?,?,?);`, [id_producto,
                                                        Nombre_pro,
                                                        Valor_pro,
                                                    Imagen_pro,
                                                Descripcion_pro,
                                            Cate_producto_id]
        );

        // Assuming resultado[0] contains the ID of the inserted record
        console.log('Insert Result:', resultado[0]);  // Add this line to print the result
        return resultado[0];
        } catch (error) {
        console.error('Error in daoPostRegistrarCategoria:', error);  // Print the error message
        return 0;
        }
    }

    // Dao Actualizar producto
    static async daoUpdateProducto({
                                        Nombre_pro,
                                        Valor_pro,
                                        Imagen_pro,
                                        Descripcion_pro,
                                        Cate_producto_id,
                                        id_producto}) {
                                try {
                                const resultado = await conexion.query(
                                `UPDATE producto
                                SET Nombre_pro = ?,
                                Valor_pro = ?,
                                Imagen_pro = ?,
                                Descripcion_pro = ?,
                                Cate_producto_id) = ? 
                                WHERE id_producto = ?`, 
                            [
                                Nombre_pro,
                                Valor_pro,
                                Imagen_pro,
                                Descripcion_pro,
                                Cate_producto_id,
                                id_producto,
                            ]
        );

        // Assuming resultado[0] contains the ID of the inserted record
        console.log('Insert Result:', resultado[0]);  // Add this line to print the result
        return resultado[0];
        } catch (error) {
            console.error('Error in daoUpdateCategoria:', error);  // Print the error message
            return 0;
        }
    }

    // Dao Eliminar producto
    static async daoDeleteProducto({id_producto}) {
        const resultado = await conexion.query(
            'DELETE FROM producto WHERE id_producto = ?;',
            [id_producto]
        )
        if (resultado[0]) return resultado[0]
        return null
    }
}