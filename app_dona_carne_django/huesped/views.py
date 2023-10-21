from django.shortcuts import render, redirect
from .services import *

def inicio_sesion_hues(request):
    usuario = request.session.get('usuario', default=None)
    if(usuario != None):
        return redirect('inicio')
    else:
        if request.method == 'POST':
            correo = request.POST["correo_hues"]
            contrasena = request.POST["contrasena_hues"]
            datos = {'correo': correo, 'contrasena': contrasena}
            
            resultado = inicio_sesion(datos)
            if resultado.get('mensaje' == 'No existe'):
                return render (request, 'core/inicio-sesion-hues.html')
            else:
                request.session['usuario'] = resultado
                return redirect('inicio')
        else:
            return render (request, 'core/inicio-sesion-hues.html')
    return render (request,'core/inicio-sesion-hues.html')
