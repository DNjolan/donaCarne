from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp
import time


driver = webapp.get_driver()
@given(u'40 me dirigo a la pagina "{url}"')
def me_dirigo_a_la_pagina (context,url):
    set = webapp.setUp()
    driver.get(url)


@when(u'40 hago click en el botón iniciar sesión "{enlace}"')
def hago_click_en_el_botón_iniciar_sesión(context, enlace):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,enlace).click()


@when(u'40 ingresar datos de Empleado')
def ingresar_datos_de_Empleado(context):
    driver.find_element(By.XPATH,'//*[@id="correo"]').click()
    driver.find_element(By.XPATH,'//*[@id="correo"]').send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,'//*[@id="contrasena"]').click()
    driver.find_element(By.XPATH,'//*[@id="contrasena"]').send_keys("1234")
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()
    time.sleep(4)


@when(u'40 ingreso a los platos "{url}"')
def ingreso_a_los_platos (context,url):
    driver.get(url)
    time.sleep(3)


@then(u'40 ingreso datos de tipo plato')
def ingreso_datos_de_la_orientacion_plato(context):
    driver.find_element(By.XPATH,'//*[@id="Plato_categoria"]').click()
    time.sleep(3)
    driver.find_element(By.XPATH,'//*[@id="Plato_categoria"]').send_keys("Desayuno")
    time.sleep(3)
    driver.find_element(By.XPATH,'//*[@id="Plato_menu"]').click()
    time.sleep(3)
    driver.find_element(By.XPATH,'//*[@id="Plato_menu"]').send_keys("Menu terraza")
    time.sleep(4)
    driver.find_element(By.XPATH,"/html/body/form[2]/input[4]").click()
    time.sleep(5)
    driver.find_element(By.XPATH,'//*[@id="Tipo_plato_id_tipo_plato"]').click()
    time.sleep(3)
