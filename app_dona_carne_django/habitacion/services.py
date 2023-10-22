import requests

def serv_get_all_habitacion():
    url = 'http://localhost:1234/habitacion/obtener-todas-las-habitaciones'
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

def serv_get_id_habitacion(datos):
    url = 'http://localhost:1234/habitacion/obtener-habitacion-por-id'
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

def serv_get_all_estado_habi():
    url = 'http://localhost:1234/habitacion/obtener-todos-los-estados'
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

def serv_post_habitacion(datos):
    url = 'http://localhost:1234/habitacion/crear-habitacion'
    respuesta = requests.post(url, json = datos)
    print('Respuesta post habitacion: ', respuesta)
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

def serv_put_habitacion(datos):
    url = 'http://localhost:1234/habitacion/actualizar-habitacion'
    respuesta = requests.put(url, json = datos)
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

def serv_delete_habitacion(datos):
    url = 'http://localhost:1234/habitacion/eliminar-habitacion'
    respuesta = requests.delete(url, json = datos)
    print('Respuesta delete habitacion: ', respuesta)
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
