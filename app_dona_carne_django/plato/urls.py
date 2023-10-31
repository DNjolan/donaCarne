from django.urls import path
from .views import *

urlpatterns = [
    path('ver-platos/', view_platos, name="ver-platos"),
    path('crear-plato/', crear_plato, name="crear-plato"),
    path('crear-subplato/', crear_orient, name="crear-subplato"),
]