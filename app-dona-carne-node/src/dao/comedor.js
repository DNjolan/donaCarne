import { conexion } from "./bdd.js";

export class ComedorDao {
    // Obtener todos los platos
    static async daoGetAllPlatos() {
        const resultado = await conexion.query(
            'SELECT * FROM PLATO;'
            
        )
        if (resultado[0]) return resultado[0]
        return null
    }

    // Obtener todas los platos por id
    static async daoGetForIDPlato({id_plato}) {
        const resultado = await conexion.query(
            'SELECT * FROM PLATO WHERE id_plato = ?;',
            [id_plato]
        )
        if (resultado[0]) return resultado[0]
        return null
    }


    // Crear plato
    static async daoPostPlato({Nombre_plato,
        Valor,
        Descripcion,
        Empleado_id_emplado,
        plato_orien_id_plato_orien,
        Tipo_plato_id_tipo_plato
    }) {
try {
const resultado = await conexion.query(
`INSERT INTO PLATO(Nombre_plato,
    Valor,
    Descripcion,
    Empleado_id_emplado,
    plato_orien_id_plato_orien,
    Tipo_plato_id_tipo_plato)
VALUES(?,?,?,?,?,?);
`,
[
    Nombre_plato,
    Valor,
    Descripcion,
    Empleado_id_emplado,
    plato_orien_id_plato_orien,
    Tipo_plato_id_tipo_plato
]
)
return resultado[0]
} catch (err) {
console.log('Error: ', err);
return 0;
}

}

}