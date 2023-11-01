Feature: eliminar una habitacione en modo empleado normal
yo como empleado normal necesito poder eliminar las habitaciones disponibles

Scenario: eliminación de habitación como empleado normal

Given test 6 Que pueda navegar por la página "http://127.0.0.1:8000/"
When test 6 hago click en el botón "/html/body/a[1]"
When test 6 ingresar datos de administrador
And test 6 hacer click en botón "/html/body/a[5]"
Then test 6 elimina habitación
