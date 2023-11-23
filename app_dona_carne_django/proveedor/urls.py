from django.urls import path
from .views import *

urlpatterns = [
    path('visualizar_proveedor/', visualizar_proveedor, name="visualizar_proveedor"),
   # path('proveedor-id/<id>', proveedor_id, name="proveedor-id"),  
    path('crear_proveedor/', crear_proveedor, name="crear_proveedor"),
]
