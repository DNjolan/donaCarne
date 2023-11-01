Feature: Actualizar habitación en modo empleado normal
yo como empleado normal necesito poder actualizar las habitaciones en el sistema

Scenario: actualización de habitaciones como empleado normal

Given test 7 Que pueda navegar por la página "http://127.0.0.1:8000/"
When test 7 hago click en el botón iniciar sesión "/html/body/a[1]"
When test 7 ingresar datos de administrador
When test 7 hacer click en botón Administrador habitaciones "/html/body/a[5]"
When test 7 hacer click en botón Actualizar habitación "/html/body/table/tbody/tr[2]/td[10]/a"
And test 7 ingresar datos de la actualización para habitación
Then test 7 confirmar actualización de la habitación
