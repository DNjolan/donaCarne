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
        const id_producto = req.body.id_producto;
        const Nombre_pro = req.body.Nombre_pro;
        const Valor_pro = req.body.Valor_pro;
        const Imagen_pro = req.body.Imagen_pro;
        const Descripcion_pro = req.body.Descripcion_pro;
        const Cate_producto_id = req.body.Cate_producto_id;
        
        try {
            const registro_cat = await ProductoDao.daoPostRegistrarProducto({ id_producto,Nombre_pro,Valor_pro,Imagen_pro,Descripcion_pro,Cate_producto_id});
            if (registro_cat === 0) {
                console.log('Producto registrado');
                return res.json({ mensaje: 'Producto registrado' });
            } else {
                console.log('Error al registrar Producto');
                return res.json({ mensaje: 'Error al registrar Producto' });
            }
        } catch (error) {
            console.log('Databse error');
            console.error('Database Error:', error);
            return res.status(500).json({ mensaje: 'Error de base de datos' });
        }
    
    }

    // Controllador Actualizar Producto
    updateProducto = async(req, res) => {
        const Nombre_pro = req.body.Nombre_pro;
        const Valor_pro = req.body.Valor_pro;
        const Imagen_pro = req.body.Imagen_pro;
        const Descripcion_pro = req.body.Descripcion_pro;
        const Cate_producto_id = req.body.Cate_producto_id;
        const id_producto = req.body.id_producto;
        try {
            const registro_cat = await ProductoDao.daoUpdateProducto({ Nombre_pro,Valor_pro,Imagen_pro,Descripcion_pro,Cate_producto_id,id_producto});
            if (registro_cat === 0) {
                console.log('Producto registrado');
                return res.json({ mensaje: 'Producto registrado' });
            } else {
                console.log('Error al registrar Producto');
                return res.json({ mensaje: 'Error al registrar Producto' });
            }
        } catch (error) {
            console.log('Databse error');
            console.error('Database Error:', error);
            return res.status(500).json({ mensaje: 'Error de base de datos' });
        }
    
    }

    // Controllador Borrar Producto
    deleteProducto = async (req, res) => {
        const id_producto = req.body.id_producto;
        const resultado = await ProductoDao.daoDeleteProducto({id_producto})
        if (resultado == 1 ) {
            return res.json({mensaje: 'Eliminado con exito'})
        } else {
            return res.json({mensaje: 'Error al borrar producto'})
        }
       
    }
    

    

}