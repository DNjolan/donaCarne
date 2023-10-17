import { conexion } from "./bdd.js";

export class HuespedDao {
    static async daoGetUsuarioLogin({correo, contrasena}) {
        const resultado = await conexion.query(
            'SELECT * FROM huesped WHERE Correo_hues = ? AND contrasena_hues = ?',
            [correo, contrasena]
        )
        if (resultado[0].length === 1) return resultado[0]
        return null
    }

    static async daoPostRegistrarHuesped({nombre, apellido_paterno,
        apellido_materno, rut_hues, nacionalidad_hues, numero_telefono, correo,
        contrasena, sexo, fecha_nacimiento, direccion_id_direccion}) {
        try {
            const resultado = await conexion.query(
                `INSERT INTO huesped(Nombre_huesped,
                    Apellido_paterno_hues, Apellido_materno_hues, Rut_hues,
                    Nacionalidad_hues, Telefono_hues, Correo_hues, contrasena_hues,
                    Sexo_hues, Fecha_nacimiento_hues, Direccion_id_direccion, Rol_id_rol)
                    VALUES(?,
                        ?,
                        ?,
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
                        nombre, apellido_paterno, apellido_materno, rut_hues,
                        nacionalidad_hues, numero_telefono, correo,
                        contrasena, sexo, fecha_nacimiento, direccion_id_direccion, 3
                    ]
            )
            return resultado[0]
        } catch (err){
            return 0
        }
    }
}