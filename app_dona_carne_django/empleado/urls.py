from django.urls import path
from .views import *

urlpatterns = [
    path('inicio-sesion/', view_inicio_sesion, name="inicio-sesion"),
    path('registrar/', registrar_empleado, name="registrar_empleado")
]