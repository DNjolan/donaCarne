from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp

driver = webapp.get_driver()
@given(u'test 6 Que pueda navegar por la página "{url}"')
def test_6_abrir_navegador(context,url):
    driver.get(url)

@when(u'test 6 hago click en el botón "{enlace}"')
def test_6_abrir_pagina(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when('test 6 ingresar datos de administrador')
def test_6_iniciar_sesion(context):
    driver.find_element(By.XPATH,"//*[@id='correo']").clear()
    driver.find_element(By.XPATH,"//*[@id='correo']").send_keys("da.nietodos@duocuc.cl")
    driver.find_element(By.XPATH,"//*[@id='contrasena']").clear()
    driver.find_element(By.XPATH,"//*[@id='contrasena']").send_keys("12345")
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()

@when(u'test 6 hacer click en botón "{enlace}"')
def test_6_abrir_pagina(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@then('test 6 elimina habitación')
def test_6_eliminar_habitacion(context):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"/html/body/table/tbody/tr[2]/td[11]/a").click()

