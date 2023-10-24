import { Router } from "express";
import { productoController } from "../controller/producto";

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

    return productoRouter


}