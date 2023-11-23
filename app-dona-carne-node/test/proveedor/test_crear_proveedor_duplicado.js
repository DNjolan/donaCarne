import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Deberia fallar el test por usuario duplicado', (done) => {
            chai.request(app)
                .post('/proveedor/registrar-proveedor')
                .send({                    
                    'Numero_telefono': '24000',
                    'Correo': 'elrubius@gmail.il',
                    'Nombre_empresa': 'Colun',
                    'Rubro': 'Lacteo',
                    'numero_telefono': 940404040,
                    'Logo': 'xd',
                    'Rut_proveedor': '1234-k',    

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
