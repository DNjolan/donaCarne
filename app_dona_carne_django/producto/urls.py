from django.urls import path
from .views import *

urlpatterns = [
    path('ver-productos/', view_productos, name="ver-productos"),
    path('new-producto/', new_producto, name="new-producto" ),
    path('edit-productos/', edit_producto, name="edit-productos" ),
    # path('upd-producto/<id>', edit_producto, name="upd-producto" ),
    path('del-producto/<id>', borrar_producto, name="del-producto" ),
    path('new-orden', generar_orden, name="new-orden" ),
    path('ordenes', view_ordenes, name="ordenes" ),

]   