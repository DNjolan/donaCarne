import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Debería obtener la lista de proveedores', (done) => {
            chai.request(app)
                .get('/proveedor/')
                .end(function (err, res) {
                    if (err) done(err);

                    // Verifica que el código de estado sea 200 (o el código real que devuelve tu aplicación)
                    expect(res).to.have.status(200);

                    // Verifica que el cuerpo de la respuesta sea un array de proveedores
                    expect(res.body).to.be.an('array');

                    // Puedes agregar más expectativas según la estructura esperada de los datos de proveedores
                    // Por ejemplo, verificar que cada proveedor tenga propiedades específicas como 'id', 'nombre', etc.

                    done();
                });
        });
    });
});
