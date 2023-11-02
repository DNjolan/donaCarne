from django.shortcuts import render,redirect
from .services import *


def index_platos(request):
    return render(request,'core/index-platos.html')

def view_platos(request):
    platos = get_all_platos()
    data = {
        'platos': platos,
    }
    return render(request,'core/ver-platos.html', data) 


def crear_plato(request):
    usuario = request.session.get('usuario', default=None)

    if (usuario == None):
        return redirect('inicio')
    else:
        if (usuario.get('Rol_id_rol') == 1 or usuario.get('Rol_id_rol') == 2):
            plato_orien = all_plato_orien()
            tipo_plato = all_tipo_plato()
            
            if request.method == 'POST':
                if 'plato_orientado' in request.POST:
                    plato_orientado = request.POST["plato_orientado"]
                    datos = {'plato_orientado': plato_orientado}
                    post_plato_orien(datos)
                    return redirect('crear-plato')
                elif 'Plato_menu' in request.POST:
                    Plato_categoria = request.POST["Plato_categoria"]
                    Plato_menu = request.POST["Plato_menu"]
                    datos = {'Plato_categoria': Plato_categoria, 'Plato_menu': Plato_menu}
                    post_tipo_plato(datos)
                    return redirect('crear-plato')
                elif 'Nombre_Plato' in request.POST:
                    Nombre_Plato = request.POST["Nombre_Plato"]
                    Valor = request.POST["Valor"]
                    Descripcion = request.POST["Descripcion"]
                    plato_orien_id_plato_orien = request.POST['plato_orien_id_plato_orien']
                    Tipo_plato_id_tipo_plato = request.POST['Tipo_plato_id_tipo_plato']
                    datos = {
                        'Nombre_Plato': Nombre_Plato,
                        'Valor': Valor,
                        'Descripcion': Descripcion,
                        'plato_orien_id_plato_orien': plato_orien_id_plato_orien,
                        'Tipo_plato_id_tipo_plato': Tipo_plato_id_tipo_plato,
                        'Empleado_id_emplado': usuario.get('id_emplado'),
                        'correo': usuario.get('Correo'),
                        'contrasena': usuario.get('contrasena')
                    }
                    postear = post_plato(datos)
                    if postear:
                        return redirect('ver-platos')
            
            data = {
                    'plato_orien': plato_orien, 
                    'tipo_plato': tipo_plato
                    }
            # print(data)
            return render(request, 'core/registrar-plato.html', data)






def crear_orient(request):
    tipo_plato = all_tipo_plato()
    if request.method == 'POST':
        if 'plato_orientado' in request.POST:
            plato_orientado = request.POST["plato_orientado"]
            datos = {'plato_orientado': plato_orientado}
            post_plato_orien(datos)
            return redirect('crear-plato')
    data = {
            'tipo_plato': tipo_plato
            }  
    
    return render(request,'core/registrar-subplato.html',data)

def edit_plato(request):
    usuario = request.session.get('usuario', default=None)

    if (usuario == None):
        return redirect('inicio')
    else:
        if (usuario.get('Rol_id_rol') == 1 or usuario.get('Rol_id_rol') == 2):
            plato_orien = all_plato_orien()
            tipo_plato = all_tipo_plato()
            platos = get_all_platos()
            data = {
                    'plato_orien': plato_orien, 
                    'tipo_plato': tipo_plato,
                    'platos':platos
                    }
            if request.method == 'POST':
                Nombre_Plato = request.POST["Nombre_Plato"]
                Valor = request.POST["Valor"]
                Descripcion = request.POST["Descripcion"]
                plato_orien_id_plato_orien = request.POST['plato_orien_id_plato_orien']
                Tipo_plato_id_tipo_plato = request.POST['Tipo_plato_id_tipo_plato']
                id_plato = request.POST['id_plato']
                datos = {

                        'Nombre_Plato': Nombre_Plato,
                        'Valor': Valor,
                        'Descripcion': Descripcion,
                        'plato_orien_id_plato_orien': plato_orien_id_plato_orien,
                        'Tipo_plato_id_tipo_plato': Tipo_plato_id_tipo_plato,
                        'id_plato':id_plato,
                        'Empleado_id_emplado': usuario.get('id_emplado'),
                        'correo': usuario.get('Correo'),
                        'contrasena': usuario.get('contrasena')
                }
                upd_plato(datos)
                return redirect('ver-platos')

    return render(request, 'core/act-plato.html',data)

def borrar_plato(request, id):
    usuario = request.session.get('usuario', default=None)

    if (usuario == None):
        return redirect('inicio')
    else:
        if (usuario.get('Rol_id_rol') == 1 or usuario.get('Rol_id_rol') == 2):
            datos = { 
                        'id_plato': id,
                        'correo': usuario.get('Correo'),
                        'contrasena': usuario.get('contrasena')
                    }
            resultado = del_plato(datos)
            if(resultado):
                return redirect('edit-plato')
            return redirect('edit-plato')
