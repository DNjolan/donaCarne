from behave import given, when, then
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from conexion import webapp
import time




driver = webapp.get_driver()
@given(u'48 me dirigo a la pagina "{url}"')
def me_dirigo_a_la_pagina (context,url):
    set = webapp.setUp()
    driver.get(url)




@when(u'48 hago click en el botón iniciar sesión "{enlace}"')
def hago_click_en_el_botón_iniciar_sesión(context, enlace):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,enlace).click()




@when(u'48 ingresar datos de Empleado')
def ingresar_datos_de_Empleado(context):
    driver.find_element(By.XPATH,'//*[@id="correo"]').click()
    driver.find_element(By.XPATH,'//*[@id="correo"]').send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,'//*[@id="contrasena"]').click()
    driver.find_element(By.XPATH,'//*[@id="contrasena"]').send_keys("1234")
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()
    time.sleep(4)




@when(u'48 ingreso a editar los platos "{url}"')
def ingreso_a_los_platos (context,url):
    driver.get(url)
    time.sleep(3)




@when(u'48 elimino un plato')
def ingreso_datos_de_la_plato(context):
    time.sleep(1)
    driver.find_element(By.XPATH,'/html/body/table/tbody/tr[2]/td[8]/button').click()
    time.sleep(3)
    driver.switch_to.alert.accept()
    time.sleep(5)


@then(u'48 ingreso al registro  de platos "{url}"')
def ingreso_a_los_platos (context,url):
    driver.get(url)
    print('Prueba 45 exitosa')
    time.sleep(5)