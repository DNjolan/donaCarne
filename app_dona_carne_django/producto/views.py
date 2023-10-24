from django.shortcuts import render,redirect
from .services import *

# Create your views here.
def view_productos(request):
    productos = get_all_productos()
    data = {
        'productos': productos,
    }

    return render(request, 'core/ver-productos.html', data) 
