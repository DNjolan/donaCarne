from django.urls import path
from .views import *

urlpatterns = [
    path('',index_platos,name="index-platos"),
    path('ver-platos/', view_platos, name="ver-platos"),
    path('crear-plato/', crear_plato, name="crear-plato"),
    path('crear-subplato/', crear_orient, name="crear-subplato"),
    path('edit-plato/', edit_plato, name="edit-plato"),
    path('del-plato/<id>', borrar_plato, name="del-plato"),
]