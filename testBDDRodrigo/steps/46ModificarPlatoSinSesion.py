from behave import given, when, then
from selenium.webdriver.common.by import By
from conexion import webapp
import time




driver = webapp.get_driver()
@given(u'46 me dirigo a la pagina "{url}"')
def me_dirigo_a_la_pagina (context,url):
    set = webapp.setUp()
    driver.get(url)
    time.sleep(5)
