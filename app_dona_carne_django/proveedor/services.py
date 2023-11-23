import requests

def serv_get_all_proveedor():
    url = 'http://localhost:1234/proveedor/todo-proveedor'
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

def serv_get_id_proveedor(datos):
    url = 'http://localhost:1234/proveedor/proveedor-id'
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


def serv_post_proveedor(datos):
    url = 'http://localhost:1234/proveedor/registrar-proveedor'
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