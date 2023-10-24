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
        id_plato = request.POST["id_plato"]
        Nombre_plato = request.POST["Nombre_plato"]
        Valor = request.POST["Valor"]
        Descripcion = request.POST["Descripcion"]
        Empleado_id_emplado = request.POST['Empleado_id_emplado']
        plato_orien_id_plato_orien = request.POST['plato_orien_id_plato_orien']
        Tipo_plato_id_tipo_plato = request.POST['Tipo_plato_id_tipo_plato']
        datos = {'id_plato':id_plato,'Nombre_plato':Nombre_plato,
                 'Valor':Valor,'Descripcion':Descripcion,
                 'Empleado_id_emplado':Empleado_id_emplado,
                 'plato_orien_id_plato_orien':plato_orien_id_plato_orien,
                 'Tipo_plato_id_tipo_plato':Tipo_plato_id_tipo_plato}
        postear = post_plato(datos)
        if (postear):
            return redirect('ver-platos')
    return render(request,'core/registrar-plato.html')