import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('No debería permitir el registro con datos vacíos', (done) => {
            chai.request(app)
                .post('/proveedor/registrar-proveedor')
                .send({
                    // Deja campos requeridos en blanco
                })
                .end(function (err, res) {
                    // Verificar que el servidor responda con un código de estado 400 en caso de datos faltantes
                    expect(res).to.have.status(400);

                    // Verificar que el cuerpo de la respuesta contenga un mensaje de error adecuado
                    expect(res.body).to.have.property('error').to.equal('Datos incompletos');

                    done();
                });
        });
    });
});
