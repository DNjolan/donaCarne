import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js'; 

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Debería recibir un mensaje de error al ingresar un valor vacío en Rut Proveedo', (done) => {
            chai.request(app)
                .post('/proveedor/registrar-proveedor')
                .send({                    
                    'Numero_telefono': '133', 
                    'Correo': 'elrubius@hotmail.com',
                    'Nombre_empresa': 'copa',
                    'Rubro': 'lacteos',
                    'numero_telefono': 940404040,
                    'Logo': 'xd',
                    'Rut_proveedor': null,    
                    'correo':'da.nieto@duocuc.cl',
                    'contrasena': 1234                
                })
                .end(function(err, res){
                    if (err) done(err)

                    
                    expect(res).to.have.status(200);
                    
                   
                    expect(res.text).to.include("Error al registrar: Valor vacío para Rut Proveedor");

                    done();
                });
        });
    });
});
