from django.shortcuts import render, redirect
from django.http import JsonResponse
from .services import *

def view_inicio_sesion(request):
    print('Primero', request)

    usuario = request.session.get('usuario', default=None)
    print(request)
    if(usuario != None):
        return redirect('inicio')
    else:
        if request.method == 'POST':
            correo = request.POST["correo"]
            contrasena = request.POST["contrasena"]
            datos = {'correo': correo, 'contrasena': contrasena}
            
            resultado = inicio_sesion(datos)
            if resultado.get('mensaje' == 'No existe'):
                return render (request, 'core/inicio-sesion.html')
            else:
                request.session['usuario'] = resultado
                print(resultado)
                return redirect('inicio')
        else:
            return render (request, 'core/inicio-sesion.html')
    return render (request,'core/inicio-sesion.html')

def registrar_empleado(request):
    usuario = request.session.get('usuario', default=None)

    if usuario == None:
        return redirect('inicio')
    else:
        id_rol = usuario.get('Rol_id_rol')
        if id_rol == 3 or id_rol == 2:
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
                print(resultado_direccion_post)

                resultado_direccion_get = serv_get_direccion()
                resultado_direccion_get_id = resultado_direccion_get.get('id_direccion')

                data = {
                    'nombre': request.POST["nombre"],
                    'apellido_paterno': request.POST["apellido_paterno"],
                    'apellido_materno': request.POST["apellido_materno"],
                    'numero_telefono': request.POST["numero_telefono"],
                    'correoRegistro': request.POST["correo_emp"],
                    'contrasenaRegistro': request.POST["contrasena_emp"],
                    'fecha_nacimiento': request.POST["fecha_nacimieto"],
                    'sexo': request.POST["sexo"],
                    'direccion_id_direccion': resultado_direccion_get_id,
                    'rol_id_rol': 2,
                    'correo': usuario.get('Correo'),
                    'contrasena': usuario.get('contrasena')
                }
                
                resultado = serv_post_empleado(data)
                if resultado.get('mensaje') == 'Registrado con exito':
                    return redirect('inicio')
                else:
                    return render (request, 'core/registrar-empleado.html', datos)      
    return render (request, 'core/registrar-empleado.html', datos)
