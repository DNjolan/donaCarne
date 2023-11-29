import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Debería obtener la lista de proveedores', (done) => {
            chai.request(app)
                .get('/proveedor/todo-proveedor')
                .end(function (err, res) {
                    if (err) done(err);

                    // Verifica que el código de estado sea 200 (o el código real que devuelve tu aplicación)
                    expect(res).to.have.status(200);

                    // Verifica que el cuerpo de la respuesta sea un array de proveedores
                    expect(res.body).to.be.an('array');

                    // Imprime los proveedores en la consola
                    console.log('Lista de Proveedores:', res.body);

                
                    done();
                });
        });
    });
});

