from django.urls import path
from .views import *

urlpatterns = [
    path('ver-platos/', view_platos, name="ver-platos"),
    path('reg-plato/', post_platos, name="reg-plato"),
]