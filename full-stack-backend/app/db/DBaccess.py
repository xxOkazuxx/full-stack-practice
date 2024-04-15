from sqlalchemy import create_engine

class DBAccess():
    def connect_database():
        conn = None
        print("Start connecting to the database...")
        try:
            engine = create_engine('postgresql://db_user:passw0rd@postgres:5432/db_name')
            conn = engine.connect()
        except Exception as error:
            print(error)
        finally:
            print("Successful Database Connection!")

        return conn

    def close_connection(connection):
        connection.close()
        print("Database Connection Closed!")