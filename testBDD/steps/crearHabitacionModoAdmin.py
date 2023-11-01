from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp

driver = webapp.get_driver()
@given(u'test 2 Que pueda navegar por la página "{url}"')
def abrir_navegador_dos(context,url):
    driver.get(url)

@when(u'test 2 hago click en el botón iniciar sesión "{enlace}"')
def abrir_pagina_dos(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when('test 2 ingresar datos de administrador')
def iniciar_sesion_dos(context):
    driver.find_element(By.XPATH,"//*[@id='correo']").clear()
    driver.find_element(By.XPATH,"//*[@id='correo']").send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,"//*[@id='contrasena']").clear()
    driver.find_element(By.XPATH,"//*[@id='contrasena']").send_keys("1234")
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()

@when(u'test 2 hacer click en botón Administrador habitaciones "{enlace}"')
def boton_administrador_habitacion_dos(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when(u'test 2 hacer click en botón Crear habitación "{enlace}"')
def boton_crear_habitacion_dos(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when(u'test 2 ingresar datos de la habitación')
def ingresar_datos_dos(context):
    driver.find_element(By.XPATH,"//*[@id='dormitorios']").send_keys("10")
    driver.find_element(By.XPATH,"//*[@id='banos']").send_keys("10")
    driver.find_element(By.XPATH,"//*[@id='cama_matrimonial']").send_keys("10")
    driver.find_element(By.XPATH,"//*[@id='cama_individual']").send_keys("10")
    driver.find_element(By.XPATH,"//*[@id='descripcion']").send_keys("Esta es una descripción")
    driver.find_element(By.XPATH,"//*[@id='precio']").send_keys("202020")
    driver.find_element(By.XPATH,"//*[@id='estado_habi_id_estado_habi']").send_keys("1")
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH, "/html/body/form/input[2]").click()

@then('test 2 confirmar creación de la habitación')
def creacion_habitacion_dos(context):
    driver.find_element(By.XPATH,"/html/body/h1").is_displayed()
 