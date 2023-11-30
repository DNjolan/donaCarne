import chai from 'chai';
import chaiHttp from 'chai-http';
import {app} from '../server.js';
const  expect = chai.expect;
chai.use(chaiHttp);
describe('Test 55 Ver una orden de producto', () => {

    describe('Visualizar una orden de producto', () => {

        //Aqui comienza el test.
        it('should return a task created', (done) => {            

            chai.request(app)
                .get('/producto/ver-ordenes')
                .query({       
                    'id_orden_producto' : 5            
                })
                .end(function(err, res){

                    if (err) done(err)

                    const datos = JSON.parse(res.text)
                    expect(res).to.have.status(200)
                    console.log('Datos: ', datos);
                    done()
                   
                });
        })
    })
})