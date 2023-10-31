import { Router } from "express";
import { productoController } from "../controller/producto.js";

export const createProductoRouter = () =>{
    const productoRouter = Router()
    const ProductoController = new productoController()

    productoRouter.get('/')
    
    // Routes - Ver todos los productos
    productoRouter.get('/ver-productos', ProductoController.getAllProductos)
    
    // Routes - Registrar un producto
    productoRouter.post('/registrar-producto', ProductoController.postRegistrarProducto)
    
    // Routes - Actualizar un producto
    productoRouter.put('/act-producto', ProductoController.updateProducto)
    
    // Routes - Borrar un producto
    productoRouter.delete('/delete-producto', ProductoController.deleteProducto)

    // --------------- Categorias

    // Routes - Registrar parametros({id_categoria, Categoria})
    productoRouter.post('/registrar-categoria',ProductoController.postRegistrarCategoria)
    productoRouter.get('/ver-categorias', ProductoController.getAllCategoria)


    // ------------------ Orden de Producto
    productoRouter.get('/ver-ordenes', ProductoController.getAllOrdenProductos)

    productoRouter.post('/registrar-orden', ProductoController.postRegistrarOrdenProducto)

    productoRouter.put('/act-orden', ProductoController.updateOrdenProducto)

    productoRouter.delete('/del-orden',ProductoController.deleteOrdenProducto)

    return productoRouter

}