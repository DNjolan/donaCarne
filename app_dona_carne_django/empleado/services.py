import requests
import json
def inicio_sesion(datos):
    url = 'http://localhost:1234/empleado/inicio-sesion'
    respuesta = requests.get(url, datos)
    
    if respuesta.status_code == 200:
        try:

            data = respuesta.json()
            return data
        except requests.exceptions.RequestException as err:
            return None
        # ({'error: ': str(err)}, status=500)
    else:
        print('error')
        return

def emp_post_categoria(datos):
    url = 'http://localhost:1234/empleado/registrar-ordenes'
    respuesta = requests.post(url, json=datos)
    print(respuesta)

    if respuesta.status_code == 200:
        try:
            data = respuesta.json()
            print('Data received:', data)
            return data
        except requests.exceptions.RequestException as err:
            print('JSON Parsing Error:', err)
            return None
    else:
        print('HTTP Error:', respuesta.status_code)
        return None 
    
def emp_get_all_categoria():
    url = 'http://localhost:1234/empleado/ver-ordenes'
    respuesta = requests.get(url)
    
    if respuesta.status_code == 200:
        try:

            data = respuesta.json()
            return data
        except requests.exceptions.RequestException as err:
            print('Error de conexión: ', err)
            return None
    else:
        print('error')
        return
    
def emp_post_producto(datos):
    url = 'http://localhost:1234/empleado/registrar-producto'
    respuesta = requests.post(url, json=datos)
    print(respuesta)

    if respuesta.status_code == 200:
        try:
            data = respuesta.json()
            print('Data received:', data)
            return data
        except requests.exceptions.RequestException as err:
            print('JSON Parsing Error:', err)
            return None
    else:
        print('HTTP Error:', respuesta.status_code)
        return None 

