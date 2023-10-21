from django.urls import path
from .views import *

urlpatterns = [
    path('inicio-sesion/', view_inicio_sesion, name="inicio-sesion"),
    path('registrar/', registrar_empleado, name="registrar_empleado"),
    path('visualizar-habitaciones/', visualizar_habitaciones, name="visualizar-habitaciones"),
    path('actualizar-habitaciones/<id>', actualizar_habitaciones, name="actualizar-habitaciones"),
    path('eliminar-habitaciones/<id>', eliminar_habitaciones, name="eliminar-habitaciones"),
    path('crear-habitaciones/', crear_habitaciones, name="crear-habitaciones")
]