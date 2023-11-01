Feature: visualización de habitaciones en modo administrador
yo como administrador necesito poder visualizar las habitaciones disponibles

Scenario: visualización de habitaciones

Given Que pueda navegar por la página "http://127.0.0.1:8000/"
When hago click en el botón "/html/body/a[1]"
When ingresar datos de administrador
And hacer click en botón "/html/body/a[5]"
Then pueda visualizar las habitaciones
