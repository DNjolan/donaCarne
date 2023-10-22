from django.urls import path
from .views import *

urlpatterns = [
    path('visualizar-habitaciones/', visualizar_habitaciones, name="visualizar-habitaciones"),
    path('actualizar-habitaciones/<id>', actualizar_habitaciones, name="actualizar-habitaciones"),
    path('eliminar-habitaciones/<id>', eliminar_habitaciones, name="eliminar-habitaciones"),
    path('crear-habitaciones/', crear_habitaciones, name="crear-habitaciones")
]