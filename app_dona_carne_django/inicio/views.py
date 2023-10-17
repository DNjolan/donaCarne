from django.shortcuts import render, redirect

# Create your views here.

def inicio(request):
    usuario = request.session.get('usuario', default=None)
    
    if usuario == None:
        return render (request,'core/index.html')
    else:
        nombre ={
            'nombre': usuario.get('Nombre'),
            'apellido_paterno': usuario.get('Apellido_Paterno')
        } 
    return render (request,'core/index.html', nombre)

def cerrar_sesion(request):
    request.session['usuario'] = None
    return redirect('inicio')