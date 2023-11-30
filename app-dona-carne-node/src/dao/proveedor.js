import { conexion } from "./bdd.js";

export class ProveedorDao {
    // Obtener todas las habitaciones
    static async daoGetAllProveedor() {
        const resultado = await conexion.query(
            'SELECT * FROM PROVEEDOR;'
        )
        if (resultado[0]) return resultado[0]
        return null
        }

    static async daoGetForIDProveedor({id_proveedor}) {
        const resultado = await conexion.query(
            'SELECT * FROM PROVEEDOR WHERE id_proveedor = ?;',
            [id_proveedor]
        )
        if (resultado[0]) return resultado[0]
        return null
    }

        // Crear plato
        static async daoPostProveedor({
            Numero_telefono,
            Correo,
            Nombre_empresa,
            Rubro,
            Logo,
            Rut_proveedor
        }) {
    try {
    const resultado = await conexion.query(
    `INSERT INTO PROVEEDOR(Numero_telefono,
        Correo,
        Nombre_empresa,
        Rubro,
        Logo,
        Rut_proveedor)
    VALUES(?,?,?,?,?,?);
    `,
    [
        Numero_telefono,
        Correo,
        Nombre_empresa,
        Rubro,
        Logo,
        Rut_proveedor
    ]
    )
    return resultado[0]
    } catch (err) {
    console.log('Error: ', err);
    return 0;
    }
    
    }
}