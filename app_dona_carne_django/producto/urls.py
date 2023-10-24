from django.urls import path
from .views import *

urlpatterns = [
    path('ver-productos/', view_productos, name="ver-productos"),
]