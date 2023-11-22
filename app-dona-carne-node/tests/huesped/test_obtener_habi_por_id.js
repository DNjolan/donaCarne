import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Habitaciones', () => {
    describe('Obtener habitaciones', () => {
        it('Deberia mostrar habitación por id', (done) => {
            chai.request(app)
                .get('/habitacion/obtener-habitacion-por-id?id_reg_habi=7')
                .end(function(err, res){

                    if (err) done(err)

                    const datos = JSON.parse(res.text)
                    console.log('Datos: ', datos);
                    expect(res).to.have.status(200);
                    done()
                })
        })
    })
})