import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Habitaciones', () => {
    describe('Obtener habitaciones', () => {
        it('No deberia mostrar habitación por id', (done) => {
            chai.request(app)
                .get('/habitacion/obtener-habitacion-por-id?id_reg_habi=100')
                .end(function(err, res){

                    if (err) done(err)

                    const datos = JSON.parse(res.text)

                    if (datos.mensaje == 'No existe habitación') {
                        console.log('Datos: ', datos);
                        // Error personalizado
                        // Se crea un error intencional con un mensaje personalizado
                        done(new Error('Error al obtener habitación, habitación no existe'))
                    }
                    else {
                        console.log('Datos: ', datos);
                        expect(res).to.have.status(200);
                        done()
                    }
                })
        })
    })
})