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


