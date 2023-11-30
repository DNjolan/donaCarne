import chai from 'chai';
import chaiHttp from 'chai-http';
import {app} from '../server.js';
const  expect = chai.expect;
chai.use(chaiHttp);

describe('Test 52 Modificar Atributos de un Producto', () => {

    describe('Se cambiará los atributos de un producto', () => {

        //Aqui comienza el test.
        it('should return a task created', (done) => {            

            chai.request(app)
                .put('/producto/act-producto')
                .send({       
                    'Nombre_pro' : 'Cafetera Dimeo Mini 3',
                    'Valor_pro' : 3000,
                    'Descripcion_pro' : 'bonnisima doble 3',
                    'Cate_producto_id_categoria' : 1 ,           
                    'id_producto' : 7        
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
