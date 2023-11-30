from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp
import time




driver = webapp.get_driver()
@given(u'44 me dirigo a la pagina "{url}"')
def me_dirigo_a_la_pagina (context,url):
    set = webapp.setUp()
    driver.get(url)




@when(u'44 hago click en el botón iniciar sesión huesped "{enlace}"')
def hago_click_en_el_botón_iniciar_sesión(context, enlace):
    time.sleep(2)
    driver.find_element(By.XPATH,enlace).click()
    time.sleep(2)




@when(u'44 ingresar datos de Huesped')
def ingresar_datos_de_Empleado(context):
    driver.find_element(By.XPATH,'//*[@id="correo_hues"]').click()
    driver.find_element(By.XPATH,'//*[@id="correo_hues"]').send_keys("ro.v@duoc.cl")
    driver.find_element(By.XPATH,'//*[@id="contrasena_hues"]').click()
    driver.find_element(By.XPATH,'//*[@id="contrasena_hues"]').send_keys("1234")
    driver.implicitly_wait(30)
    driver.find_element(By.XPATH,"/html/body/form/input[4]").click()
    time.sleep(4)




@then(u'44 ingreso a los platos "{url}"')
def ingreso_a_los_platos (context,url):
    driver.get(url)
    time.sleep(5)