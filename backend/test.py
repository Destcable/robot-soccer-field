from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/soccer/fields', methods=["GET"])
def soccerFields():
    return jsonify([ { "id": 1, "name": 123}, { "id": 2, "name": 456} ])

def main(): 
    app.run(debug=True)

if __name__ == "__main__":
    main()