from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp

driver = webapp.get_driver()
@given(u'test 3 Que pueda navegar por la página "{url}"')
def test_3_abrir_navegador(context,url):
    set = webapp.setUp()
    driver.get(url)

@when(u'test 3 hago click en el botón "{enlace}"')
def test_3_abrir_pagina(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when('test 3 ingresar datos de administrador')
def test_3_iniciar_sesion(context):
    driver.find_element(By.XPATH,"//*[@id='correo']").clear()
    driver.find_element(By.XPATH,"//*[@id='correo']").send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,"//*[@id='contrasena']").clear()
    driver.find_element(By.XPATH,"//*[@id='contrasena']").send_keys("1234")
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()

@when(u'test 3 hacer click en botón "{enlace}"')
def test_3_abrir_pagina(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@then('test 3 elimina habitación')
def test_3_eliminar_habitacion(context):
    driver.find_element(By.XPATH,"/html/body/table/tbody/tr[2]/td[11]/a").click()

