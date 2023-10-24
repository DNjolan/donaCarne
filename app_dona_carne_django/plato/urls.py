from django.urls import path
from .views import *

urlpatterns = [
    path('ver-platos/', view_platos, name="ver-platos"),
    path('registrar-plato/', post_platos, name="registrar-plato"),
]