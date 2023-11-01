from django.shortcuts import render, redirect
from .services import *
from empleado.services import serv_get_all_empleados

def visualizar_habitaciones(request):
    usuario = request.session.get('usuario', default=None)

    if (usuario == None):
        return redirect('inicio')
    else:
        if (usuario.get('Rol_id_rol') == 1 or usuario.get('Rol_id_rol') == 2):
            datos = {
                'correo': usuario.get('Correo'),
                'contrasena': usuario.get('contrasena'),
            }
            data = {
                'habitaciones': serv_get_all_habitacion(),
                'estado_habi': serv_get_all_estado_habi(),
                'empleado': serv_get_all_empleados(datos)
            }
            return render(request, 'core/read-habitaciones.html', data)
        else:
            return redirect('inicio')

def crear_habitaciones(request):
    usuario = request.session.get('usuario', default=None)

    if (usuario == None):
        return redirect('inicio')
    else:
        if (usuario.get('Rol_id_rol') == 1 or usuario.get('Rol_id_rol') == 2):
            data = {
                'estado_habi': serv_get_all_estado_habi()
            }
            if request.method == "POST":
                datos = {
                    'dormitorios': request.POST['dormitorios'],
                    'banos': request.POST['banos'],
                    'cama_matrimonial': request.POST['cama_matrimonial'],
                    'cama_individual': request.POST['cama_individual'],
                    'descripcion': request.POST['descripcion'],
                    'precio': request.POST['precio'],
                    'estado_habi_id_estado_habi': request.POST['estado_habi_id_estado_habi'],
                    'empleado_id_emplado': usuario.get('id_emplado'),
                    'correo': usuario.get('Correo'),
                    'contrasena': usuario.get('contrasena')
                }
                resultado = serv_post_habitacion(datos)

                if (resultado):
                    return redirect('visualizar-habitaciones')
                else:
                    print('Error')

            return render(request, 'core/create-habitaciones.html', data)
        else:
            return redirect('inicio')

def actualizar_habitaciones(request, id):
    usuario = request.session.get('usuario', default=None)

    if (usuario == None):
        return redirect('inicio')
    else:
        if (usuario.get('Rol_id_rol') == 1 or usuario.get('Rol_id_rol') == 2):
            id_dict = {
                'id_reg_habi': id
            }
            resultado_id_habi = serv_get_id_habitacion(id_dict)
            data = {
                'estado_habi': serv_get_all_estado_habi(),
                'habitacion': resultado_id_habi
            }
            print(resultado_id_habi)

            if request.method == "POST":
                datos = {
                    'dormitorios': request.POST['dormitorios'],
                    'banos': request.POST['banos'],
                    'cama_matrimonial': request.POST['cama_matrimonial'],
                    'cama_individual': request.POST['cama_individual'],
                    'descripcion': request.POST['descripcion'],
                    'precio': request.POST['precio'],
                    'estado_habi_id_estado_habi': request.POST['estado_habi_id_estado_habi'],
                    'empleado_id_emplado': usuario.get('id_emplado'),
                    'id_reg_habi': id,
                    'correo': usuario.get('Correo'),
                    'contrasena': usuario.get('contrasena')
                }
                resultado = serv_put_habitacion(datos)

                if (resultado):
                    return redirect('visualizar-habitaciones')

            return render(request, 'core/update-habitaciones.html', data)
        else:
            return redirect('inicio')
    return render(request, 'core/update-habitaciones.html')

def eliminar_habitaciones(request, id):
    usuario = request.session.get('usuario', default=None)

    if (usuario == None):
        return redirect('inicio')
    else:
        if (usuario.get('Rol_id_rol') == 1 or usuario.get('Rol_id_rol') == 2):
            datos = {
                'id_reg_habi': id,
                'correo': usuario.get('Correo'),
                'contrasena': usuario.get('contrasena')
            }
            resultado = serv_delete_habitacion(datos)
            if (resultado):
                return redirect('visualizar-habitaciones')
        else:
            return redirect('inicio')
    return redirect('visualizar-habitaciones')