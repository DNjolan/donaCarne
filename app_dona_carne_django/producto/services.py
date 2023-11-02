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
# ------------- Categorias -----------------

def post_categoria(datos):
    url = 'http://localhost:1234/producto/registrar-categoria'
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
    
def get_all_categoria():
    url = 'http://localhost:1234/producto/ver-categorias'
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
# ----------------------Ordenes de Productos-----------------


def all_ordenes():
    url = 'http://localhost:1234/producto/ver-ordenes'
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
    
def post_orden(datos):
    url = 'http://localhost:1234/producto/registrar-orden'
    respuesta = requests.post(url, json = datos)
    print('Respuesta post orden: ', respuesta)
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

def upd_orden(datos):
    url = 'http://localhost:1234/producto/act-orden'
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
    
def del_orden(datos):
    url = 'http://localhost:1234/producto/del-orden'
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