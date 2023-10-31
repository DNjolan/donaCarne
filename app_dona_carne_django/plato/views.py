from django.shortcuts import render,redirect
from .services import *

def view_platos(request):
    platos = get_all_platos()
    data = {
        'platos': platos,
    }
    return render(request,'core/ver-platos.html', data) 

def post_platos(request):
    if request.method == 'POST':
        Nombre_Plato = request.POST["Nombre_Plato"],
        Valor = request.POST["Valor"],
        Descripcion = request.POST["Descripcion"],
        Empleado_id_emplado = request.POST['Empleado_id_emplado'],
        plato_orien_id_plato_orien = request.POST['plato_orien_id_plato_orien'],
        Tipo_plato_id_tipo_plato = request.POST['Tipo_plato_id_tipo_plato'],
        datos = {
                 'Nombre_Plato':Nombre_Plato,
                 'Valor':Valor,
                 'Descripcion':Descripcion,
                 'Empleado_id_emplado':Empleado_id_emplado,
                 'plato_orien_id_plato_orien':plato_orien_id_plato_orien,
                 'Tipo_plato_id_tipo_plato':Tipo_plato_id_tipo_plato
                 }
        postear = post_plato(datos)
        if (postear):
            return redirect('ver-platos')
    return render(request,'core/registrar-plato.html')

def crear_plato(request):
    platorien = all_plato_orien()
    tipo = all_tipo_platos()
    
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
            Empleado_id_empleado = request.POST['Empleado_id_empleado']
            plato_orien_id_plato_orien = request.POST['plato_orien_id_plato_orien']
            Tipo_plato_id_tipo_plato = request.POST['Tipo_plato_id_tipo_plato']
            datos = {
                'Nombre_Plato': Nombre_Plato,
                'Valor': Valor,
                'Descripcion': Descripcion,
                'Empleado_id_empleado': Empleado_id_empleado,
                'plato_orien_id_plato_orien': plato_orien_id_plato_orien,
                'Tipo_plato_id_tipo_plato': Tipo_plato_id_tipo_plato
            }
            postear = post_plato(datos)
            if postear:
                return redirect('ver-platos')
    
    data = {'plato_orien': platorien, 'tipo_platos': tipo}
    return render(request, 'core/registrar-plato.html', data)

def crear_orient(request):
    if request.method == 'POST':
        if 'plato_orientado' in request.POST:
            plato_orientado = request.POST["plato_orientado"]
            datos = {'plato_orientado': plato_orientado}
            post_plato_orien(datos)
            return redirect('crear-plato')
    
    return render(request,'core/registrar-subplato.html')
