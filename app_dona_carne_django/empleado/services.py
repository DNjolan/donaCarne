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
            print('Error de conexión: ', err)
            return None
    else:
        print('error')
        return

def serv_get_all_empleados(datos):
    url = 'http://localhost:1234/empleado/obtener-todos-los-empleados'
    respuesta = requests.get(url, datos)
    
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

def serv_get_comuna():
    url = 'http://localhost:1234/datos/obtener-comunas'
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
    return

def serv_get_region():
    url = 'http://localhost:1234/datos/obtener-regiones'
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
    return

def serv_post_direccion(data_direccion):
    url = 'http://localhost:1234/post-datos-x/registrar-direccion'
    respuesta = requests.post(url, json = data_direccion)

    if respuesta.status_code == 200:
        try:
            data = respuesta.json()
            return data
        except requests.exceptions.RequestException as err:
            print('Error de conexión: ', err)
            return None
    else:
        print('error a')
        return

def serv_get_direccion():
    url = 'http://localhost:1234/datos/obtener-ultima-direccion'
    respuesta = requests.get(url)
    
    if respuesta.status_code == 200:
        try:

            data = respuesta.json()
            return data
        except requests.exceptions.RequestException as err:
            return JsonResponse({'error: ': str(err)}, status=500)
    else:
        print('error')
        return

def serv_post_empleado(datos):
    url = 'http://localhost:1234/empleado/registrar-empleado'
    respuesta = requests.post(url, json = datos)
    if respuesta.status_code == 200:
        try:

            data = respuesta.json()
            return data
        except requests.exceptions.RequestException as err:
            return JsonResponse({'error: ': str(err)}, status=500)
    else:
        print('error')
        return
