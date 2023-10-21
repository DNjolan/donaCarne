from django.urls import path
from .views import *

urlpatterns = [
    path('inicio-sesion/', view_inicio_sesion, name="inicio-sesion"),
    path('ordenes/', view_ordenes, name="ordenes"),
]