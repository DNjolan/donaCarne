from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp

driver = webapp.get_driver()
@given(u'Que pueda navegar por la página "{url}"')
def abrir_navegador(context,url):
    driver.get(url)

@when(u'hago click en el botón "{enlace}"')
def abrir_pagina(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@when('ingresar datos de administrador')
def iniciar_sesion(context):
    driver.find_element(By.XPATH,"//*[@id='correo']").clear()
    driver.find_element(By.XPATH,"//*[@id='correo']").send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,"//*[@id='contrasena']").clear()
    driver.find_element(By.XPATH,"//*[@id='contrasena']").send_keys("1234")
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()

@when(u'hacer click en botón "{enlace}"')
def abrir_pagina(context, enlace):
    driver.implicitly_wait(5)
    driver.find_element(By.XPATH,enlace).click()

@then('pueda visualizar las habitaciones')
def ver_habitaciones(context):
    driver.find_element(By.XPATH,"/html/body/table/tbody/tr[2]/td[1]").is_displayed()

