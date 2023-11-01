from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp
import time

driver = webapp.get_driver()
@given(u'test 13 Que pueda navegar por la página "{url}"')
def test_13_abrir_navegador_dos(context,url):
    set = webapp.setUp()
    time.sleep(2)
    driver.get(url)

@when(u'test 13 hago click en el botón iniciar sesión "{enlace}"')
def test_13_abrir_pagina_dos(context, enlace):
    time.sleep(3)
    driver.find_element(By.XPATH,enlace).click()

@when('test 13 ingresar datos de administrador')
def test_13_iniciar_sesion_dos(context):
    driver.find_element(By.XPATH,"//*[@id='correo']").clear()
    driver.find_element(By.XPATH,"//*[@id='correo']").send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,"//*[@id='contrasena']").clear()
    driver.find_element(By.XPATH,"//*[@id='contrasena']").send_keys("1234")
    time.sleep(3)
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()

@when(u'test 13 hacer click en botón Administrador habitaciones "{enlace}"')
def test_13_boton_administrador_habitacion_dos(context, enlace):
    time.sleep(3)
    driver.find_element(By.XPATH,enlace).click()

@when(u'test 13 hacer click en botón Crear habitación "{enlace}"')
def test_13_boton_crear_habitacion_dos(context, enlace):
    time.sleep(3)
    driver.find_element(By.XPATH,enlace).click()

@when(u'test 13 ingresar datos de la habitación')
def test_13_ingresar_datos_dos(context):
    driver.find_element(By.XPATH,"//*[@id='dormitorios']").send_keys("2")
    driver.find_element(By.XPATH,"//*[@id='banos']").send_keys("2")
    driver.find_element(By.XPATH,"//*[@id='cama_matrimonial']").send_keys("1")
    driver.find_element(By.XPATH,"//*[@id='cama_individual']").send_keys("4")
    driver.find_element(By.XPATH,"//*[@id='descripcion']").send_keys("Esta habitación tiene dos dormitorios, los cuales una tiene cama matrimonial, la otra dos camas individuales, cuenta con dos baños para la mayor comodidad del usuario, esta habitación es especial para una familia de cuatro integrantes, dos niños y un matrimonio. Esta habitación tiene dos dormitorios, los cuales una tiene cama matrimonial, la otra dos camas individuales, cuenta con dos baños para la mayor comodidad del usuario, esta habitación es especial para una familia de cuatro integrantes, dos niños y un matrimonio. Esta habitación tiene dos dormitorios, los cuales una tiene cama matrimonial, la otra dos camas individuales, cuenta con dos baños para la mayor comodidad del usuario, esta habitación es especial para una familia de cuatro integrantes, dos niños y un matrimonio.")
    driver.find_element(By.XPATH,"//*[@id='precio']").send_keys("70000")
    driver.find_element(By.XPATH,"//*[@id='estado_habi_id_estado_habi']").send_keys("1")
    time.sleep(3)
    driver.find_element(By.XPATH, "/html/body/form/input[2]").click()

@then('test 13 visualizar el error de la validación descripción')
def test_13_creacion_habitacion_dos(context):
    time.sleep(3)
    driver.find_element(By.XPATH,"//*[@id='descripcion']").is_displayed()
 