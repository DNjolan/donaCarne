from django.urls import path
from .views import *

urlpatterns = [
    path('inicio-sesion-hues/', inicio_sesion_hues, name="inicio-sesion-hues")
]