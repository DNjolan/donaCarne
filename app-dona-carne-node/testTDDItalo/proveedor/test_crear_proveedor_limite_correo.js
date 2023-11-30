import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js'; 

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Debería recibir un mensaje de error al superar el límite máximo de caracteres en Correo', (done) => {
            chai.request(app)
                .post('/proveedor/registrar-proveedor')
                .send({                    
                    'Numero_telefono': '1111',
                    'Correo': 'elrubius_Vegeta_willyrex_goku_agil_cum_master_777_@gmail.cl',
                    'Nombre_empresa': 'Colun',
                    'Rubro': 'Lacteo',
                    'numero_telefono': 940404040,
                    'Logo': 'xd',
                    'Rut_proveedor': '1234-k',    
                    'correo':'da.nieto@duocuc.cl',
                    'contrasena': 1234                
                })
                .end(function(err, res){
                    if (err) done(err)

                    expect(res).to.have.status(200);
                    
                    expect(res.text).to.include("Fuera de rango para columna : 'Correo'");

                    done();
                });
        });
    });
});