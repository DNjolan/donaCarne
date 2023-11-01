from selenium import webdriver

class WebApp:
    instance = None
    driver = None
    webapp = None
    driverpath = webdriver.EdgeOptions()
    @classmethod
    def get_instancia(cls):
        if cls.instance is None:
            cls.instance = WebApp()
        return cls.instance

    def __init__(self):
        self.driver = webdriver.Edge(self.driverpath)
    
    def get_driver(self):
        return self.driver
    
    def setUp(self):
        self.driver.maximize_window()
        self.driver.delete_all_cookies()
    
    def tearDown(self):
        #self.driver.implicitly_wait(5)
        if self.driver is not None:
            self.driver.quit()

webapp = WebApp.get_instancia()