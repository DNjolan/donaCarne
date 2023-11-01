Feature: Validar input descripción de habitación en modo administrador
yo como administrador necesito poder visualizar la validación del input descripción para no guardar algo que no va en la base de datos

Scenario: validación input descripción de la creación para habitación

Given test 13 Que pueda navegar por la página "http://127.0.0.1:8000/"
When test 13 hago click en el botón iniciar sesión "/html/body/a[1]"
When test 13 ingresar datos de administrador
When test 13 hacer click en botón Administrador habitaciones "/html/body/a[5]"
When test 13 hacer click en botón Crear habitación "/html/body/a[2]"
And test 13 ingresar datos de la habitación
Then test 13 visualizar el error de la validación descripción
