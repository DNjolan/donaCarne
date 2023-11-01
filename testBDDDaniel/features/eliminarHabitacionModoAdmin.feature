Feature: eliminar una habitacione en modo administrador
yo como administrador necesito poder eliminar las habitaciones disponibles

Scenario: eliminación de habitación

Given test 3 Que pueda navegar por la página "http://127.0.0.1:8000/"
When test 3 hago click en el botón "/html/body/a[1]"
When test 3 ingresar datos de administrador
And test 3 hacer click en botón "/html/body/a[5]"
Then test 3 elimina habitación
