from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp

driver = webapp.get_driver()
@given(u'test 9 Que pueda navegar por la página "{url}"')
def test_9_abrir_navegador_dos(context,url):
    set = webapp.setUp()
    driver.implicitly_wait(30)
    driver.get(url)

@when(u'test 9 hago click en el botón iniciar sesión "{enlace}"')
def test_9_abrir_pagina_dos(context, enlace):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,enlace).click()

@when('test 9 ingresar datos de administrador')
def test_9_iniciar_sesion_dos(context):
    driver.find_element(By.XPATH,"//*[@id='correo']").clear()
    driver.find_element(By.XPATH,"//*[@id='correo']").send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,"//*[@id='contrasena']").clear()
    driver.find_element(By.XPATH,"//*[@id='contrasena']").send_keys("1234")
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()

@when(u'test 9 hacer click en botón Administrador habitaciones "{enlace}"')
def test_9_boton_administrador_habitacion_dos(context, enlace):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,enlace).click()

@when(u'test 9 hacer click en botón Crear habitación "{enlace}"')
def test_9_boton_crear_habitacion_dos(context, enlace):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,enlace).click()

@when(u'test 9 ingresar datos de la habitación')
def test_9_ingresar_datos_dos(context):
    driver.find_element(By.XPATH,"//*[@id='dormitorios']").send_keys("10")
    driver.find_element(By.XPATH,"//*[@id='banos']").send_keys("10")
    driver.find_element(By.XPATH,"//*[@id='cama_matrimonial']").send_keys("10")
    driver.find_element(By.XPATH,"//*[@id='cama_individual']").send_keys("10")
    driver.find_element(By.XPATH,"//*[@id='descripcion']").send_keys("Esta es una descripción")
    driver.find_element(By.XPATH,"//*[@id='precio']").send_keys("202020")
    driver.find_element(By.XPATH,"//*[@id='estado_habi_id_estado_habi']").send_keys("1")
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH, "/html/body/form/input[2]").click()

@then('test 9 visualizar el error de la validación')
def test_9_creacion_habitacion_dos(context):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"//*[@id='dormitorios']").is_displayed()
 