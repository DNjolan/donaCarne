import { ProveedorDao } from "../dao/proveedor.js";
import { EmpleadoDao } from "../dao/empleado.js";


export class ProveedorController {
    // Obtener todas las habitaciones
    getAllProveedores = async (req, res) => {
        const resultado = await ProveedorDao.daoGetAllProveedor(); // Use the correct variable name
        if (resultado) return res.json(resultado);
        return res.json({ mensaje: 'No existen proveedores ' });
    }

    getIDProveedor = async (req, res) => {
        const id_proveedor = req.query.id_proveedor
        const resultado = await ProveedorDao.daoGetForIDProveedor({id_proveedor})
        if (resultado) return res.json(resultado[0])
        return res.json({mensaje: 'No existe habitación'})
    }

    postProveedor = async (req, res) => {
        const Numero_telefono = req.query.Numero_telefono;
        const Correo = req.query.Correo;
        const Nombre_empresa = req.query.Nombre_empresa;
        const Rubro = req.query.Rubro;
        const Logo = req.query.Logo
        const Rut_proveedor = req.query.Rut_proveedor;
    
        // Agregar declaraciones de depuración
        console.log('Datos recibidos en el cuerpo de la solicitud:');
        console.log('Numero Telefono:',Numero_telefono);
        console.log('Correo:', Correo);
        console.log('Nombre empresa:', Nombre_empresa);
        console.log('Rubro:', Rubro);
        console.log('Logo :', Logo);
        console.log('Rut proveedor:',Rut_proveedor);
    
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
    
            const resultado = await ProveedorDao.daoPostProveedor({
                Numero_telefono,
                Correo,
                Nombre_empresa,
                Rubro,
                Logo,
                Rut_proveedor
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
