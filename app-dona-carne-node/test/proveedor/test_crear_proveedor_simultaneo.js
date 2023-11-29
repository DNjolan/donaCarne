import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Proveedor', () => {
    describe('Manejar Proveedor', () => {
        it('Debería poder registrar varios proveedores al mismo tiempo', (done) => {
            const proveedores = [
                {
                    'Numero_telefono': '1111',
                    'Correo': 'proveedor1@gmail.com',
                    'Nombre_empresa': 'Proveedor1',
                    'Rubro': 'Lacteo',
                    'numero_telefono': 940404040,
                    'Logo': 'xd',
                    'Rut_proveedor': '1234-k',
                    'correo': 'da.nieto@duocuc.cl',
                    'contrasena': 1234
                },
                {
                    'Numero_telefono': '2222',
                    'Correo': 'proveedor2@gmail.com',
                    'Nombre_empresa': 'Proveedor2',
                    'Rubro': 'Carnes',
                    'numero_telefono': 940404041,
                    'Logo': 'xd',
                    'Rut_proveedor': '5678-m',
                    'correo': 'da.nieto@duocuc.cl',
                    'contrasena': 5678
                },
                // Agrega más proveedores según sea necesario
            ];

            const promises = proveedores.map(proveedor => {
                return chai.request(app)
                    .post('/proveedor/registrar-proveedor')
                    .send(proveedor)
                    .then(response => {
                        expect(response).to.have.status(200);
                        expect(response.text).to.include('Proveedor registrado correctamente');
                    });
            });

            Promise.all(promises)
                .then(() => done())
                .catch(done);
        });
    });
});
