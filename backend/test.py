from flask import Flask, request, jsonify, g
from flask_cors import CORS
import mysql.connector as con
# import sqlite3 as sq
import sqlalchemy as db

app = Flask(__name__)
CORS(app)
DATABASE = 'main.db'
engine = db.create_engine('sqlite:///main.db')

def get_db(): 
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sq.connect(DATABASE)
        db.row_factory = sq.Row
    return db

@app.route('/soccer/fields', methods=["GET"])
def soccerFields():
    query = db.select(['soccer'])
    conn = engine.connect()
    selectttt = conn.execute(query)
    print(selectttt)
    # db = get_db()
    # data = db.execute('SELECT * FROM soccer').fetchall()
    # print(jsonify(list(data)))
    return jsonify({ })
    # connection = sq.connect(DATABASE)
    # cur = connection.cursor()
    # cur.execute('SELECT * FROM soccer')
    
    # data = cur.fetchall()

    # print(data)

    # connection.close()
    return jsonify(data)

def main(): 
    app.run(debug=True)

if __name__ == "__main__":
    main()