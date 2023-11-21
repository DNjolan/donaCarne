import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Huesped', () => {
    describe('Manejar huesped', () => {
        it('Deberia fallar el test por usuario duplicado', (done) => {
            chai.request(app)
                .post('/huesped/registrar-huesped')
                .send({                    
                    'nombre': 'Javiera',
                    'apellido_paterno': 'Alcachofa',
                    'apellido_materno': 'Alfonso',
                    'rut_hues': '20.123.123-2',
                    'nacionalidad_hues': 'Chilena',
                    'numero_telefono': 940404040,
                    'correo': 'javiera@duocuc.cl',
                    'contrasena': '1234',
                    'sexo': 'M',
                    'fecha_nacimiento': '2001-06-15',
                    'direccion_id_direccion': 1
                })
                .end(function(err, res){

                    if (err) done(err)

                    const datos = JSON.parse(res.text)

                    expect(res).to.have.status(200);
                    if (datos.mensaje == 'Error al registrar'){
                        console.log('Datos: ', datos);
                        // Error del lenguaje
                        // Se coloca como false obligatorio para que falle el test
                        // expect(true).to.be.false;

                        // Error personalizado
                        // Se crea un error intencional con un mensaje personalizado
                        done(new Error('Error al registrar, usuario existente'))
                    }else{
                        console.log('Datos: ', datos);
                        done()
                    }
                });
        })
    })
})