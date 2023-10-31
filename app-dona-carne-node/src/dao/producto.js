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
        Cate_producto_id_categoria,
        id_producto,
    }) {
        try {
            const resultado = await conexion.query(
                `UPDATE producto
                SET Nombre_pro = ?,
                    Valor_pro = ?,
                    Imagen_pro = ?,
                    Descripcion_pro = ?,
                    Cate_producto_id_categoria = ?
                WHERE id_producto = ?`,
                [
                    Nombre_pro,
                    Valor_pro,
                    Imagen_pro,
                    Descripcion_pro,
                    Cate_producto_id_categoria,
                    id_producto,
                ]
            );
    
            // Assuming resultado[0] contains the ID of the updated record
            console.log('Update Result:', resultado[0]); // Add this line to print the result
            return resultado[0];
        } catch (error) {
            console.error('Error in daoUpdateProducto:', error); // Print the error message
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


    // Registrar Categoria de productos
    static async daoPostRegistrarCategoria({ Categoria }) {
        try {
            const resultado = await conexion.query(
                `INSERT INTO cate_producto(Categoria) VALUES (?);`, [Categoria]
            );
    
            // Assuming resultado[0] contains the ID of the inserted record
            console.log('Insert Result:', resultado[0]);  // Add this line to print the result
            return resultado[0];
        } catch (error) {
            console.error('Error in daoPostRegistrarCategoria:', error);  // Print the error message
            return 0;
        }
    }

    // Obtener todas las categorias creadas por Rodrigo Papá
    static async daoGetAllCategorias() {
    const resultado = await conexion.query(
        'SELECT * FROM cate_producto',
        
    )
    if (resultado[0]) return resultado[0]
        return null
    }

    //Registrar Producto
    static async daoPostRegistrarProducto({Nombre_pro, Valor_pro,
                                           Descripcion_pro, Cate_producto_id_categoria}) {
        try {
            const resultado = await conexion.query(
                `INSERT INTO producto(Nombre_pro,Valor_pro,Descripcion_pro,Cate_producto_id_categoria) 
                VALUES (?,?,?,?);`, [Nombre_pro, Valor_pro, Descripcion_pro, Cate_producto_id_categoria]
            );

        // Assuming resultado[0] contains the ID of the inserted record
        console.log('Insert Result:', resultado[0]);  // Add this line to print the result
        return resultado[0];
        } catch (error) {
            console.error('Error in daoPostRegistrarCategoria:', error);  // Print the error message
            return 0;
        }
    }

    // ----------Orden de productos------------
	// Dao - Obtener todas las Ordenes de Productos
	static async daoGetAllOrdenProductos(){
		const resultado = await conexion.query(
			'SELECT * FROM orden_ped_prod;'
		)
		if (resultado[0]) return resultado[0]
        	return null
	}

    
	// Dao - Crear una Orden de Producto
	static async daoPostOrdenProducto ({Cantidad, Valor_total, Orden_pedido_id_pedido, Producto_id_producto}){
        try {
            const resultado = await conexion.query(`INSERT INTO orden_ped_prod(Cantidad,Valor_total,Orden_pedido_id_pedido,Producto_id_producto)VALUES(?,?,?,?)`,
            [Cantidad, Valor_total, Orden_pedido_id_pedido, Producto_id_producto]);
            return resultado[0];
        } catch (err) {
            console.log('Error', err);
            return 0;
        }
    }

    // Dao - Actualizar una Orden de Producto
	static async daoUpdateOrdenProducto ({Cantidad, Valor_total,Orden_pedido_id_pedido,Producto_id_producto,id_orden_producto}){
	const resultado = await conexion.query(`UPDATE orden_ped_prod SET Cantidad = ?,Valor_total=?,Orden_pedido_id_pedido=?,Producto_id_producto=? WHERE id_orden_producto = ?;`[Cantidad, Valor_total,Orden_pedido_id_pedido,Producto_id_producto,id_orden_producto]);
    console.log('Update Result:', resultado[0]); // Add this line to print the result
    return resultado[0];
        } catch (error) {
            console.error('Error in daoUpdateOrdenProducto:', error); // Print the error message
            return 0;
        }

    // DAO - Eliminar una orden de producto
	static async daoDeleteOrdenProducto({id_orden_producto}){
	const resultado = await conexion.query(
        'DELETE FROM producto WHERE id_orden_producto = ?;',
        [id_orden_producto]
    )
    if (resultado[0]) return resultado[0]
    return null
    }
}