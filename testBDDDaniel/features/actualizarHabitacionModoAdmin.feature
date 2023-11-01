Feature: Actualizar habitación en modo administrador
yo como administrador necesito poder actualizar las habitaciones en el sistema

Scenario: actualización de habitaciones

Given test 4 Que pueda navegar por la página "http://127.0.0.1:8000/"
When test 4 hago click en el botón iniciar sesión "/html/body/a[1]"
When test 4 ingresar datos de administrador
When test 4 hacer click en botón Administrador habitaciones "/html/body/a[5]"
When test 4 hacer click en botón Actualizar habitación "/html/body/table/tbody/tr[2]/td[10]/a"
And test 4 ingresar datos de la actualización para habitación
Then test 4 confirmar actualización de la habitación
