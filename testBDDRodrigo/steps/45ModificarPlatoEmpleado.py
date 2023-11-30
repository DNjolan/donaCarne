from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp
import time




driver = webapp.get_driver()
@given(u'45 me dirigo a la pagina "{url}"')
def me_dirigo_a_la_pagina (context,url):
    set = webapp.setUp()
    driver.get(url)




@when(u'45 hago click en el botón iniciar sesión "{enlace}"')
def hago_click_en_el_botón_iniciar_sesión(context, enlace):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,enlace).click()




@when(u'45 ingresar datos de Empleado')
def ingresar_datos_de_Empleado(context):
    driver.find_element(By.XPATH,'//*[@id="correo"]').click()
    driver.find_element(By.XPATH,'//*[@id="correo"]').send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,'//*[@id="contrasena"]').click()
    driver.find_element(By.XPATH,'//*[@id="contrasena"]').send_keys("1234")
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()
    time.sleep(4)




@when(u'45 ingreso a editar los platos "{url}"')
def ingreso_a_los_platos (context,url):
    driver.get(url)
    time.sleep(3)




@when(u'45 modifico datos de platos')
def ingreso_datos_de_la_plato(context):
    time.sleep(3)
    driver.find_element(By.XPATH,'//*[@id="Nombre_Plato"]').click()
    driver.find_element(By.XPATH,'//*[@id="Nombre_Plato"]').clear()
    driver.find_element(By.XPATH,'//*[@id="Nombre_Plato"]').send_keys("Empanada de marisco")
    time.sleep(2)
    driver.find_element(By.XPATH,'//*[@id="Valor"]').click()
    driver.find_element(By.XPATH,'//*[@id="Valor"]').clear()
    driver.find_element(By.XPATH,'//*[@id="Valor"]').send_keys("5800")
    time.sleep(2)
    driver.find_element(By.XPATH,'//*[@id="Descripcion"]').click()
    driver.find_element(By.XPATH,'//*[@id="Descripcion"]').clear()
    driver.find_element(By.XPATH,'//*[@id="Descripcion"]').send_keys("Contundente")
    time.sleep(2)
    driver.find_element(By.XPATH,'//*[@id="plato_orien_id_plato_orien"]').click()
    time.sleep(2)
    driver.find_element(By.XPATH,'/html/body/table/tbody/tr[2]/td[5]/select/option[3]').click()
    time.sleep(2)
    driver.find_element(By.XPATH,'//*[@id="Tipo_plato_id_tipo_plato"]').click()
    time.sleep(2)
    driver.find_element(By.XPATH,'/html/body/table/tbody/tr[2]/td[6]/select/option[4]').click()
    time.sleep(2)
    driver.find_element(By.XPATH,"/html/body/table/tbody/tr[2]/td[7]/input").click()
    time.sleep(7)


@then(u'45 ingreso al registro  de platos "{url}"')
def ingreso_a_los_platos (context,url):
    driver.get(url)
    print('Prueba 45 exitosa')
    time.sleep(5)