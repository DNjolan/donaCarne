from django.urls import path
from .views import *

urlpatterns = [
    path('', inicio, name="inicio"),
    path('cerrar_sesion', cerrar_sesion, name="cerrar_sesion")
]