from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp
import time


driver = webapp.get_driver()
@given(u'me dirigo a la pagina "{url}"')
def me_dirigo_a_la_pagina (context,url):
    set = webapp.setUp()
    driver.get(url)


@when(u'hago click en el botón iniciar sesión "{enlace}"')
def hago_click_en_el_botón_iniciar_sesión(context, enlace):
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,enlace).click()


@when(u'ingresar datos de Empleado')
def ingresar_datos_de_Empleado(context):
    driver.find_element(By.XPATH,'//*[@id="correo"]').click()
    driver.find_element(By.XPATH,'//*[@id="correo"]').send_keys("da.nieto@duocuc.cl")
    driver.find_element(By.XPATH,'//*[@id="contrasena"]').click()
    driver.find_element(By.XPATH,'//*[@id="contrasena"]').send_keys("1234")
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()
    time.sleep(4)


@when(u'ingreso a los platos "{url2}"')
def ingreso_a_los_platos (context,url2):
    driver.get(url2)


@then(u'ingreso datos de la orientacion plato')
def ingreso_datos_de_la_orientacion_plato(context):
    driver.find_element(By.XPATH,'//*[@id="plato_orientado"]').click()
    driver.find_element(By.XPATH,'//*[@id="plato_orientado"]').send_keys("Generales")
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"/html/body/form[1]/input[3]").click()
    time.sleep(5)
    driver.find_element(By.XPATH,'//*[@id="plato_orien_id_plato_orien"]').click()
    time.sleep(3)