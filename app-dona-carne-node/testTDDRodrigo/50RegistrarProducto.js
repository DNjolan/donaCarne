import chai from 'chai';
import chaiHttp from 'chai-http';
import {app} from '../server.js';
const  expect = chai.expect;
chai.use(chaiHttp);

describe('Test 50 Crear Producto', () => {

    describe('Se probará la creación de un producto', () => {

        //Aqui comienza el test.
        it('should return a task created', (done) => {            

            chai.request(app)
                .post('/producto/registrar-producto')
                .send({       
                    'Nombre_pro' : 'Burgir XL',
                    'Valor_pro' : 5000,
                    'Descripcion_pro' : 'callampin bombin ',
                    'Cate_producto_id_categoria' : 1                       
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
