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

        
}


