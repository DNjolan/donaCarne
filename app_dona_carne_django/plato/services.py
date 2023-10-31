import requests

def get_all_platos():
    url = 'http://localhost:1234/plato/ver-platos'
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


def post_plato(datos):
    url = 'http://localhost:1234/plato/registrar-plato'
    respuesta = requests.post(url, json = datos)
    print('Respuesta post plato: ', respuesta)
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

def upd_plato(datos):
    url = 'http://localhost:1234/plato/act-plato'
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

def del_plato(datos):
    url = 'http://localhost:1234/plato/delete-plato'
    respuesta = requests.delete(url, json = datos)
    print('Respuesta delete plato: ', respuesta)
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

# ---------------------------subcategorias platos----------------------------


def all_plato_orien():
    url = 'http://localhost:1234/plato/ver-plato-orien'
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


def post_plato_orien(datos):
    url = 'http://localhost:1234/plato/new-plato-orien'
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

def all_tipo_platos():
    url = 'http://localhost:1234/plato/tipos_platos'
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


def post_tipo_plato(datos):
    url = 'http://localhost:1234/plato/new-tipo-plato'
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