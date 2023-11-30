import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js'; 

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Debería recibir un mensaje de error al superar el límite máximo de caracteres en Rubro', (done) => {
            chai.request(app)
                .post('/proveedor/registrar-proveedor')
                .send({                    
                    'Numero_telefono': '1111',
                    'Correo': 'elrubius@hotmail.com',
                    'Nombre_empresa': 'Colun',
                    'Rubro': 'Lacteo_no_vegano_vegetariano_opresor_explotador',
                    'numero_telefono': 940404040,
                    'Logo': 'xd',
                    'Rut_proveedor': '1234-k',    
                    'correo':'da.nieto@duocuc.cl',
                    'contrasena': 1234                
                })
                .end(function(err, res){
                    if (err) done(err)

                    expect(res).to.have.status(200);
                    
                    expect(res.text).to.include("Fuera de rango para columna : 'Rubro'");

                    done();
                });
        });
    });
});