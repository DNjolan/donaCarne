import chai from 'chai';
import chaiHttp from 'chai-http';
import {app} from '../server.js';
const  expect = chai.expect;
chai.use(chaiHttp);

describe('Test 54 Crear una orden de producto', () => {

    describe('Crear una orden de producto', () => {

        //Aqui comienza el test.
        it('should return a task created', (done) => {            

            chai.request(app)
                .post('/producto/registrar-orden')
                .send({       
                    'Cantidad' : 5,
                    'Valor_total' : 5000,
                    'Producto_id_producto' : 2            
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
