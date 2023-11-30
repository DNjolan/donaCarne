import chai from 'chai';
import chaiHttp from 'chai-http';
import {app} from '../server.js';
const  expect = chai.expect;
chai.use(chaiHttp);

describe('Test 53 Eliminar un Producto', () => {

    describe('Se eliminará un producto creado', () => {

        //Aqui comienza el test.
        it('should return a task created', (done) => {            

            chai.request(app)
                .delete('/producto/delete-producto')
                .query({       
                    'id_producto' : '7'            
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