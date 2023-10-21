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