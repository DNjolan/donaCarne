import express, { json }  from "express";
import { corsMiddleware } from "./src/middlewares/cors.js";
// My imports
import { createEmpleadoRouter } from "./src/routes/empleado.js";

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

// modulo empleado
app.use('/empleado', createEmpleadoRouter())

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})