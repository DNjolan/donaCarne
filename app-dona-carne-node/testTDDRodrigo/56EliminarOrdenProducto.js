import chai from 'chai';
import chaiHttp from 'chai-http';
import {app} from '../server.js';
const  expect = chai.expect;
chai.use(chaiHttp);

describe('Test 56 Eliminar una orden de producto', () => {

    describe('Se eliminará una orden de producto', () => {

        //Aqui comienza el test.
        it('should return a task created', (done) => {            

            chai.request(app)
                .delete('/producto/del-orden')
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