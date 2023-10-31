from django.shortcuts import render,redirect
from .services import *

# Create your views here.
def view_productos(request):
    productos = get_all_productos()
    data = {
        'productos': productos,
    }

    return render(request, 'core/ver-productos.html', data) 

def new_producto(request):
    categorias = get_all_categoria()  # Get the list of categories

    if request.method == 'POST':
        if 'Categoria' in request.POST:
            # Process the "Categoria" form
            Categoria = request.POST["Categoria"]
            datos = {'Categoria': Categoria}
            post_categoria(datos)
            return redirect('new-producto')
        elif 'Nombre_pro' in request.POST:
            # Process the "datos_producto" form
            Nombre_pro = request.POST["Nombre_pro"]
            Valor_pro = request.POST["Valor_pro"]
            Descripcion_pro = request.POST["Descripcion_pro"]
            Cate_producto_id_categoria = request.POST["Cate_producto_id_categoria"]
            datos_productos = {
                'Nombre_pro': Nombre_pro,
                'Valor_pro': Valor_pro,
                'Descripcion_pro': Descripcion_pro,
                'Cate_producto_id_categoria': Cate_producto_id_categoria,
            }
            post_producto(datos_productos)
            print(datos_productos)
            return redirect('ver-productos')
        
        # You can add additional validation or checks here if needed

    data = {
        'Categorias': categorias,
    }

    return render(request, 'core/new-producto.html', data)

def edit_producto(request):
    productos = get_all_productos()
    categorias = get_all_categoria()
    data = {
        'productos': productos,
        'Categorias': categorias
    }
    if request.method == 'POST':
        Nombre_pro = request.POST["Nombre_pro"]
        Valor_pro = request.POST["Valor_pro"]
        Descripcion_pro = request.POST["Descripcion_pro"]
        Cate_producto_id_categoria = request.POST["Cate_producto_id_categoria"]
        id_producto = request.POST["id_producto"]
        datos_productos = {
            'Nombre_pro': Nombre_pro,
            'Valor_pro': Valor_pro,
            'Descripcion_pro': Descripcion_pro,
            'Cate_producto_id_categoria': Cate_producto_id_categoria,
            'id_producto':id_producto
        }
        upd_producto(datos_productos)
        return redirect('edit-productos')
    
    return render(request, 'core/act-producto.html', data)

def borrar_producto(request, id):
    id_del = { 'id_producto': id}
    resultado = del_producto(id_del)
    if(resultado):
        return redirect('edit-productos')
    return redirect('edit-productos')

def view_ordenes(request):
    ordenes = all_ordenes()
    productos = get_all_productos()

    data = {
        'ordenes' : ordenes,
        'productos': productos
    }
    return render(request, 'core/lista-ordenes.html' , data)

def generar_orden(request):
    productos = get_all_productos()
    data = {
        'productos': productos,
    }
    if request.method == 'POST':
        Cantidad = request.POST["Cantidad"]
        Valor_total = request.POST["Valor_total"]
        # Orden_pedido_id_pedido = request.POST["Orden_pedido_id_pedido"]
        Producto_id_producto = request.POST["Producto_id_producto"]
        datos = {
            'Cantidad':Cantidad,
            'Valor_total':Valor_total,
            # 'Orden_pedido_id_pedido':Orden_pedido_id_pedido,
            'Producto_id_producto':Producto_id_producto
        }
        post_orden(datos)
        print(datos)
        return redirect('ordenes')

    return render(request, 'core/new-orden.html', data) 

