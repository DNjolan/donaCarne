from django.shortcuts import render, redirect
from .services import *  # Ajusta el nombre de la función de servicio

def visualizar_proveedor(request):
    usuario = request.session.get('usuario')

    if not usuario or usuario['Rol_id_rol'] not in {1, 2}:
        return redirect('inicio')

    datos = {
        'proveedores': serv_get_all_proveedor() 

    }

    return render(request, 'read-proveedor.html', datos)




def crear_proveedor(request):
    usuario = request.session.get('usuario')

    if not usuario or usuario['Rol_id_rol'] not in {1, 2}:
        return redirect('inicio')

    if request.method == "POST":
        datos = {
            'Numero_telefono': request.POST['Numero_telefono'],
            'Correo': request.POST['Correo'],
            'Nombre_empresa': request.POST['Nombre_empresa'],
            'Rubro': request.POST['Rubro'],
            'Rut_proveedor': request.POST['Rut_proveedor'],
            'correo': usuario['Correo'],
            'contrasena': usuario['contrasena']
        }
        resultado = serv_post_proveedor(datos)

        if resultado:
            return redirect('visualizar_proveedor')

    return render(request, 'create-proveedor.html')
