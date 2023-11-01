from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp

driver = webapp.get_driver()
@given(u'test 4 Que pueda navegar por la página "{url}"')
def test_4_abrir_navegador_dos(context,url):
    set = webapp.setUp()
    driver.get(url)

@when(u'test 4 hago click en el botón iniciar sesión "{enlace}"')
def test_4_abrir_pagina_dos(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when('test 4 ingresar datos de administrador')
def test_4_iniciar_sesion_dos(context):
    driver.find_element(By.XPATH,"//*[@id='correo']").clear()
    driver.find_element(By.XPATH,"//*[@id='correo']").send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,"//*[@id='contrasena']").clear()
    driver.find_element(By.XPATH,"//*[@id='contrasena']").send_keys("1234")
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()

@when(u'test 4 hacer click en botón Administrador habitaciones "{enlace}"')
def test_4_boton_administrador_habitacion_dos(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when(u'test 4 hacer click en botón Actualizar habitación "{enlace}"')
def test_4_boton_crear_habitacion_dos(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when(u'test 4 ingresar datos de la actualización para habitación')
def test_4_ingresar_datos_dos(context):
    driver.find_element(By.XPATH,"//*[@id='dormitorios']").clear()
    driver.find_element(By.XPATH,"//*[@id='banos']").clear()
    driver.find_element(By.XPATH,"//*[@id='cama_matrimonial']").clear()
    driver.find_element(By.XPATH,"//*[@id='cama_individual']").clear()
    driver.find_element(By.XPATH,"//*[@id='descripcion']").clear()
    driver.find_element(By.XPATH,"//*[@id='precio']").clear()
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"//*[@id='dormitorios']").send_keys("2")
    driver.find_element(By.XPATH,"//*[@id='banos']").send_keys("2")
    driver.find_element(By.XPATH,"//*[@id='cama_matrimonial']").send_keys("1")
    driver.find_element(By.XPATH,"//*[@id='cama_individual']").send_keys("2")
    driver.find_element(By.XPATH,"//*[@id='descripcion']").send_keys("Esta habitación tiene dos dormitorios, los cuales una tiene cama matrimonial, la otra dos camas individuales, cuenta con dos baños para la mayor comodidad del usuario, esta habitación es especial para una familia de cuatro integrantes, dos niños y un matrimonio")
    driver.find_element(By.XPATH,"//*[@id='precio']").send_keys("40000")
    driver.implicitly_wait(10)
    driver.find_element(By.XPATH, "/html/body/form/input[2]").click()

@then('test 4 confirmar actualización de la habitación')
def test_4_creacion_habitacion_dos(context):
    driver.find_element(By.XPATH,"/html/body/h1").is_displayed()
