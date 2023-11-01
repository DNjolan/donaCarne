Feature: Creación de habitación en modo empleado normal
yo como empleado normal necesito poder crear las habitaciones en el sistema

Scenario: creación de habitacione como empleado normal

Given test 8 Que pueda navegar por la página "http://127.0.0.1:8000/"
When test 8 hago click en el botón iniciar sesión "/html/body/a[1]"
When test 8 ingresar datos de administrador
When test 8 hacer click en botón Administrador habitaciones "/html/body/a[5]"
When test 8 hacer click en botón Crear habitación "/html/body/a[2]"
And test 8 ingresar datos de la habitación
Then test 8 confirmar creación de la habitación
