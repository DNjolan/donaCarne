import express, { json }  from "express";
import { corsMiddleware } from "./src/middlewares/cors.js";
// My imports
import { createEmpleadoRouter } from "./src/routes/empleado.js";
import { createHuespedRouter } from "./src/routes/huesped.js";
import { createDatosXRouter } from "./src/routes/obtener_datos_x.js";
import { createPostDatosXRouter } from "./src/routes/post_datos_x.js";

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

// modulo empleado
app.use('/empleado', createEmpleadoRouter())
// modulo huesped
app.use('/huesped', createHuespedRouter())
// modulo obtener datos X
app.use('/datos', createDatosXRouter())
// modulo crear datos X
app.use('/post-datos-x', createPostDatosXRouter())

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})