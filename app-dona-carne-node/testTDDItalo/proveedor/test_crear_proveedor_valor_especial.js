import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js'; 

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Debería recibir un mensaje de rechazo con datos especiales', (done) => {
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
                    'correo':'da.nieto@duocuc.cl',
                    'contrasena': true                
                })
                .end(function(err, res){
                    if (err) done(err)
                   
                    expect(res).to.have.status(200);
                    
                    expect(res.text).to.include('Error al registrar'); 
                    done();
                });
        });
    });
});

