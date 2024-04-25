from typing import List
from app.db.model import User
from app.db.DBaccess import DBAccess
from sqlalchemy.sql import text

class Repository:
    def selectAll():
        connection = DBAccess.connect_database()

        allData = List[User]
        allData = []

        query = text("SELECT * FROM users;")
        try:
            rows = connection.execute(query)
            for row in rows:
                allData.append(row)

        except Exception as error:
            print(error)

        finally:
            DBAccess.close_connection(connection)

        return allData
    
    def selectById(id):
        connection = DBAccess.connect_database()

        query = text("SELECT * FROM users WHERE id = 1;")
        try:
            row = connection.execute(query).first()
            print(row)
        except Exception as error:
            print(error)

        finally:
            DBAccess.close_connection(connection)

        return row