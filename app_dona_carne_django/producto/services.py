import requests


def get_all_productos():
    url = 'http://localhost:1234/producto/ver-productos'
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


def post_producto(datos):
    url = 'http://localhost:1234/producto/registrar-producto'
    respuesta = requests.post(url, json = datos)
    print('Respuesta post producto: ', respuesta)
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

def upd_producto(datos):
    url = 'http://localhost:1234/producto/act-producto'
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

def del_producto(datos):
    url = 'http://localhost:1234/producto/delete-producto'
    respuesta = requests.delete(url, json = datos)
    print('Respuesta delete producto: ', respuesta)
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