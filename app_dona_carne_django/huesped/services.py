import requests

def inicio_sesion(datos):
    url = 'http://localhost:1234/huesped/iniciar-sesion'
    respuesta = requests.get(url, datos)
    if respuesta.status_code == 200:
        try:

            data = respuesta.json()
            return data
        except requests.exceptions.RequestException as err:
            return JsonResponse({'error: ': str(err)}, status=500)
    else:
        print('error')
        return

def serv_registrar_huesped(datos):
    url = 'http://localhost:1234/huesped/registrar-huesped'
    respuesta = requests.get(url, datos)
    if respuesta.status_code == 200:
        try:

            data = respuesta.json()
            print('Data: ', data)
            return data
        except requests.exceptions.RequestException as err:
            return err
    else:
        print('error')
        return