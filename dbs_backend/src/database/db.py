import mysql.connector
from dotenv import load_dotenv
import os
load_dotenv()


class Database:
    instance=None
    def __init__(self):
        self.connection = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
      )
        pass
    
    def get_instance(cls):
        if cls.instance==None is None:
            cls.instance=Database()
        return cls.instance
    
    def get_connection(self):
        return self.connection
    
    def get_cursor(self):
        return self.connection.cursor()