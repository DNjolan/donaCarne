import { EmpleadoDao } from "../dao/empleado.js";
import { ComedorDao } from "../dao/comedor.js";

export class ComedorController {
    // Obtener todas las habitaciones
    getAllPlatos = async (req, res) => {
        const resultado = await ComedorDao.daoGetAllPlatos()
        if (resultado) return res.json(resultado)
        return res.json({mensaje: 'No existen Los Platos '})
    }

    getIDPlato = async (req, res) => {
        const id_plato = req.query.id_plato
        const resultado = await HabitacionDao.daoGetForIDPlato({id_plato})
        if (resultado) return res.json(resultado[0])
        return res.json({mensaje: 'No existe el plato'})
    }


    postPlato = async (req, res) => {
        const Nombre_plato = req.query.Nombre_plato;
        const Valor = req.query.Valor;
        const Descripcion = req.query.Descripcion;
        const Empleado_id_emplado = req.query.Empleado_id_emplado;
        const Tipo_plato_id_tipo_plato = req.query.Tipo_plato_id_tipo_plato;
    
        // Agregar declaraciones de depuración
        console.log('Datos recibidos en el cuerpo de la solicitud:');
        console.log('Nombre_plato:', Nombre_plato);
        console.log('Valor:', Valor);
        console.log('Descripcion:', Descripcion);
        console.log('Empleado_id_emplado:', Empleado_id_emplado);
        console.log('Tipo_plato_id_tipo_plato:', Tipo_plato_id_tipo_plato);
    
        const correo = req.query.correo;
        const contrasena = req.query.contrasena;
    
        // Agregar declaración de depuración
        console.log('Datos de autenticación:');
        console.log('Correo:', correo);
    
        const permiso = await EmpleadoDao.daoGetUsuarioLogin({ correo, contrasena });
    
        // Agregar declaración de depuración
        console.log('Resultado de la autenticación:');
        console.log('Permiso:', permiso);
    
        if (permiso) {
            const idPermiso = permiso[0].Rol_id_rol;
    
            // Agregar declaración de depuración
            console.log('Rol del usuario (idPermiso):', idPermiso);
    
            const resultado = await ComedorDao.daoPostPlato({
                Nombre_plato,
                Valor,
                Descripcion,
                Empleado_id_emplado,
                plato_orien_id_plato_orien,
                Tipo_plato_id_tipo_plato
            });
    
            // Agregar declaración de depuración
            console.log('Resultado de la inserción en la base de datos:');
            console.log('Resultado:', resultado);
    
            if (resultado && (idPermiso === 1 || idPermiso === 2)) {
                return res.json({ mensaje: 'Registrado con éxito' });
            } else {
                return res.json({ mensaje: 'Error al registrar' });
            }
        } else {
            return res.json({ mensaje: 'Error al registrar' });
        }
    }
}

