Feature: Validar input baños de habitación en modo administrador
yo como administrador necesito poder visualizar la validación del input baños para no guardar algo que no va en la base de datos

Scenario: validación input baños de la creación para habitación

Given test 10 Que pueda navegar por la página "http://127.0.0.1:8000/"
When test 10 hago click en el botón iniciar sesión "/html/body/a[1]"
When test 10 ingresar datos de administrador
When test 10 hacer click en botón Administrador habitaciones "/html/body/a[5]"
When test 10 hacer click en botón Crear habitación "/html/body/a[2]"
And test 10 ingresar datos de la habitación
Then test 10 visualizar el error de la validación baños
