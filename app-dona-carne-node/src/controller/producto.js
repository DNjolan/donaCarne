import { ProductoDao } from "../dao/producto.js";

export class productoController {
    
    // Controller Ver Todos los Productos
    getAllProductos = async (req, res) => {
        const resultado = await ProductoDao.daoGetAllProductos()
        if (resultado) return res.json(resultado)
        return res.json({mensaje: 'No existen productos'})

    }

    // Controller Registrar producto
    postRegistrarProducto = async(req, res) => {
        const Nombre_pro = req.body.Nombre_pro
        const Valor_pro = req.body.Valor_pro
        const Descripcion_pro = req.body.Descripcion_pro
        const Cate_producto_id_categoria = req.body.Cate_producto_id_categoria
        const registro = await ProductoDao.daoPostRegistrarProducto({Nombre_pro,Valor_pro,Descripcion_pro,Cate_producto_id_categoria});
        if (registro === 0) {
            console.log('Producto registrado');
            return res.json({ mensaje: 'Producto registrado' });
        } else {
            console.log('Error al registrar Producto');
            return res.json({ mensaje: 'Error al registrar Producto' });
        }
    }

    // Controllador Actualizar Producto
    updateProducto = async(req, res) => {
        const Nombre_pro = req.body.Nombre_pro
        const Valor_pro = req.body.Valor_pro
        const Descripcion_pro = req.body.Descripcion_pro
        const Cate_producto_id_categoria = req.body.Cate_producto_id_categoria
        const id_producto = req.body.id_producto
        
        const registro_cat = await ProductoDao.daoUpdateProducto({ Nombre_pro,Valor_pro,Descripcion_pro,Cate_producto_id_categoria,id_producto});
        if (registro_cat) {
            console.log('Producto registrado');
            return res.json({ mensaje: 'Producto registrado' });
        } else {
            console.log('Error al registrar Producto');
            return res.json({ mensaje: 'Error al registrar Producto' });
        }
    }

    // Controllador Borrar Producto
    deleteProducto = async (req, res) => {
        const id_producto = req.body.id_producto
        const resultado = await ProductoDao.daoDeleteProducto({id_producto})
        if (resultado == 1 ) {
            return res.json({mensaje: 'Eliminado con exito'})
        } else {
            return res.json({mensaje: 'Error al borrar producto'})
        }
       
    }
    
    postRegistrarCategoria = async (req, res) => {
        const Categoria = req.body.Categoria;
        try {
            const registro_cat = await ProductoDao.daoPostRegistrarCategoria({ Categoria });
    
            if (registro_cat) {
                console.log('Categoria registrada');
                return res.json({ mensaje: 'Categoria registrada' });
            } else {
                console.log('Error al registrar Categoria');
                return res.json({ mensaje: 'Error al registrar Categoria' });
            }
        } catch (error) {
            console.log('Databse error');
            console.error('Database Error:', error);
            return res.status(500).json({ mensaje: 'Error de base de datos' });
        }

    }

    // Traer todas las categorias
    getAllCategoria = async (req, res) => {
        const resultado = await ProductoDao.daoGetAllCategorias()
        if (resultado) return res.json(resultado)
        return res.json({mensaje: 'No existen categoria'})

    }

    // ----------------------Ordenes de Productos----------------------------
    // Controller Ver Ordenes de productos
    getAllOrdenProductos = async (req, res) => {
        const resultado = await ProductoDao.daoGetAllOrdenProductos()
        if (resultado) return res.json(resultado)
        return res.json({mensaje: 'No existen ordenes de productos'})

    }

    // Controller Registrar producto
    postRegistrarOrdenProducto = async(req, res) => {
        const Cantidad = req.body.Cantidad
        const Valor_total = req.body.Valor_total
        // const Orden_pedido_id_pedido = req.body.Orden_pedido_id_pedido
        const Producto_id_producto = req.body.Producto_id_producto
        const registro = await ProductoDao.daoPostOrdenProducto({Cantidad, Valor_total,Producto_id_producto});
        if (registro) {
            console.log('Orden registrada');
            return res.json({ mensaje: 'Orden registrada' });
        } else {
            console.log('Error al registrar Orden');
            return res.json({ mensaje: 'Error al registrar Orden' });
        }
    }

    // Controllador Actualizar Producto
    updateOrdenProducto = async(req, res) => {
        const Cantidad = req.body.Cantidad
        const Valor_total = req.body.Valor_total
        const Orden_pedido_id_pedido = req.body.Orden_pedido_id_pedido
        const Producto_id_producto = req.body.Producto_id_producto
        const id_orden_producto = req.body.id_orden_producto
        
        const registro_cat = await ProductoDao.daoUpdateProducto({Cantidad,Valor_total,Orden_pedido_id_pedido,Producto_id_producto,id_orden_producto});
        // if (registro_cat == 0) {
        //     console.log('Producto registrado');
        //     return res.json({ mensaje: 'Producto registrado' });
        // } else {
        //     console.log('Error al registrar Producto');
        //     return res.json({ mensaje: 'Error al registrar Producto' });
        // }
    }

    // Controllador Borrar Orden
    deleteOrdenProducto = async (req, res) => {
        const id_producto = req.body.id_orden_producto
        const resultado = await ProductoDao.daoDeleteOrdenProducto({id_orden_producto})
        if (resultado == 1 ) {
            return res.json({mensaje: 'Eliminado con exito'})
        } else {
            return res.json({mensaje: 'Error al borrar producto'})
        }
    }
}