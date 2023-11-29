import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Debería prevenir la inyección SQL al obtener la lista de proveedores', (done) => {
            // Intento de inyección SQL
            const maliciousInput = "' OR 1=1; --";

            console.log('Realizando solicitud con entrada maliciosa:', maliciousInput);

            chai.request(app)
                .get('/proveedor/todo-proveedor' + maliciousInput)
                .end(function (err, res) {
                    if (err) {
                        console.error('Error en la solicitud:', err);
                        return done(err);
                    }

                    // Verifica que el código de estado sea 200 (o el código real que devuelve tu aplicación)
                    console.log('Código de estado de la respuesta:', res.status);
                    expect(res).to.have.status(200);

                    // Verifica que el cuerpo de la respuesta sea un array de proveedores no vacío
                    console.log('Cuerpo de la respuesta:', res.body);
                    expect(res.body).to.be.an('array').that.is.not.empty;

                    // Verifica que el resultado no incluya información no autorizada
                    console.log('Texto de la respuesta:', res.text);
                    expect(res.text).to.not.include('DROP TABLE');

                    // Imprime los proveedores en la consola
                    console.log('Lista de Proveedores:', res.body);

                    done();
                });
        });
    });
});
