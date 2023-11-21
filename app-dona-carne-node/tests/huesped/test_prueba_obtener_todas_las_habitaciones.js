import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Habitaciones', () => {
    describe('Obtener habitaciones', () => {
        it('Deberia mostrar todas las habitaciones', (done) => {
            chai.request(app)
                .get('/habitacion/obtener-todas-las-habitaciones')
                .end(function(err, res){

                    if (err) done(err)

                    const datos = JSON.parse(res.text)

                    expect(res).to.have.status(200);
                    console.log('Datos: ', datos);
                    done()
                   
                });
        })
    })
})