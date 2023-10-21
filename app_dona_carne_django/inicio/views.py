from django.shortcuts import render, redirect

# Create your views here.

def inicio(request):
    usuario = request.session.get('usuario', default=None)
    
    if usuario == None:
        return render (request,'core/index.html')
    else:
        usuario_id = usuario.get('Rol_id_rol')
        if usuario_id == 3:
            nombre ={
                'nombre': usuario.get('Nombre_huesped'),
                'apellido_paterno': usuario.get('Apellido_paterno_hues'),
                'rol': usuario_id
            } 
        else:
            nombre ={
                'nombre': usuario.get('Nombre'),
                'apellido_paterno': usuario.get('Apellido_Paterno'),
                'rol': usuario_id
            } 
    return render (request,'core/index.html', nombre)

def cerrar_sesion(request):
    request.session['usuario'] = None
    return redirect('inicio')