from django.shortcuts import render, redirect
from .services import *
from empleado.services import serv_get_comuna, serv_get_region, serv_get_direccion, serv_post_direccion

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

def registrar_huesped(request):
    usuario = request.session.get('usuario', default=None)

    if usuario != None:
        return redirect('inicio')
    else:
        datos = {
            'comunas': serv_get_comuna(),
            'regiones': serv_get_region()
        }

        if request.method == 'POST':
            direccion = request.POST["direccion"]
            comuna_id_comuna = request.POST["comuna_id_comuna"]
            numero_direccion = request.POST["numero_direccion"]

            data_direccion = {
                'direccion': direccion,
                'comuna_id_comuna': comuna_id_comuna,
                'numero_direccion': numero_direccion
            }
            resultado_direccion_post = serv_post_direccion(data_direccion)

            resultado_direccion_get = serv_get_direccion()
            resultado_direccion_get_id = resultado_direccion_get.get('id_direccion')

            data = {
                'nombre': request.POST["nombre"],
                'apellido_paterno': request.POST["apellido_paterno"],
                'apellido_materno': request.POST["apellido_materno"],
                'rut_hues': request.POST["rut_hues"],
                'nacionalidad_hues': request.POST["nacionalidad_hues"],
                'numero_telefono': request.POST["numero_telefono"],
                'correo': request.POST["correo"],
                'contrasena': request.POST["contrasena"],
                'sexo': request.POST["sexo"],
                'fecha_nacimiento': request.POST["fecha_nacimiento"],
                'direccion_id_direccion': resultado_direccion_get_id,
                'rol_id_rol': 3
            }
            
            resultado = serv_registrar_huesped(data)
            if resultado.get('mensaje') == 'Registrado con exito':
                return redirect('inicio')
            else:
                return render (request, 'core/registrar-huesped.html', datos)
    return render (request, 'core/registrar-huesped.html', datos) 