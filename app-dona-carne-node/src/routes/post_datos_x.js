import { Router } from "express";
import { PostDatosXController } from "../controller/post_datos_x.js";

export const createPostDatosXRouter = () => {
    const postDatosXRouter = Router()
    const postDatosXController = new PostDatosXController()

    postDatosXRouter.get('/')

    postDatosXRouter.post('/registrar-direccion', postDatosXController.postDireccion)

    return postDatosXRouter
}