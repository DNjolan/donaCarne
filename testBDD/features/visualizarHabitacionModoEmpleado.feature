Feature: visualización de habitaciones en modo empleado
yo como empleado necesito poder visualizar las habitaciones disponibles

Scenario: visualización de habitaciones modo empleado

Given test 5 Que pueda navegar por la página "http://127.0.0.1:8000/"
When test 5 hago click en el botón "/html/body/a[1]"
When test 5 ingresar datos de administrador
And test 5 hacer click en botón "/html/body/a[5]"
Then test 5 pueda visualizar las habitaciones
