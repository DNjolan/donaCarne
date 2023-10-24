from django.shortcuts import render, redirect
from django.http import JsonResponse
from .services import *
# Create your views here.

def view_inicio_sesion(request):
    usuario = request.session.get('usuario', default=None)
    if(usuario != None):
        return redirect('inicio')
    else:
        if request.method == 'POST':
            correo = request.POST["correo"]
            contrasena = request.POST["contrasena"]
            datos = {'correo': correo, 'contrasena': contrasena}
            
            resultado = inicio_sesion(datos)
            print(resultado)
            if resultado.get('mensaje' == 'No existe'):
                return render (request, 'core/inicio-sesion.html')
            else:
                request.session['usuario'] = resultado
                return redirect('inicio')
        else:
            return render (request, 'core/inicio-sesion.html')
    return render (request,'core/inicio-sesion.html')

def view_ordenes(request):
    if request.method == 'POST':
        Categoria = request.POST["Categoria"]
        # id_categoria = request.POST["id_categoria"]
        datos = {'Categoria': Categoria}
        categorias = emp_get_all_categoria()  # Assuming this function fetches all categories

        # Create a dictionary with the data to pass to the template
        data = {
            'datos': datos,
            'Categorias': categorias,
        }

        print(datos)

        return render(request, 'core/ordenes.html', data)
    
    categorias = emp_get_all_categoria()  # Assuming this function fetches all categories

    data = {
        'Categorias': categorias,
    }

    return render(request, 'core/ordenes.html', data) 

