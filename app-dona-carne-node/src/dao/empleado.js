import { conexion } from "./bdd.js";

export class EmpleadoDao {
    // Obtener usuario logeado
    // Pasar parametros {correo, contrasena}
    static async daoGetUsuarioLogin({correo, contrasena}){
        const resultado = await conexion.query(
            'SELECT * FROM empleado WHERE Correo = ? AND contrasena = ?',
            [correo, contrasena]
        )
        if (resultado[0].length === 1) return resultado[0]
        return null
    }

    // Obtener todos los empleados
    static async daoGetEmpleadoAll() {
        const resultado = await conexion.query(
            'SELECT * FROM empleado;'
        )
        if (resultado[0]) return resultado[0]
        return null
    }

    // Registrar empleado
    static async daoPostRegistrarEmpleado({nombre,
                                            apellido_paterno,
                                            apellido_materno,
                                            numero_telefono,
                                            correoRegistro,
                                            contrasenaRegistro,
                                            fecha_nacimiento,
                                            sexo,
                                            direccion_id_direccion,
                                            rol_id_rol}) {
        try {
            const resultado = await conexion.query(
                `INSERT INTO empleado(Nombre,
                    Apellido_Paterno,
                    Apellido_Materno,
                    Numero_telefono,
                    Correo,
                    contrasena,
                    Fecha_nacimiento,
                    Sexo,
                    Direccion_id_direccion,
                    Rol_id_rol)
                    VALUES(?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?,
                        ?);`,
                    [
                        nombre,
                        apellido_paterno,
                        apellido_materno,
                        numero_telefono,
                        correoRegistro,
                        contrasenaRegistro,
                        fecha_nacimiento,
                        sexo,
                        direccion_id_direccion,
                        rol_id_rol
                    ]
            )
            return resultado[0]
        } catch {
            return 0
        }
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
        
}


