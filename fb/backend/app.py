from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/usage')
def get_usage():
    return jsonify({
        "AC": 3.4,
        "Fan": 1.1,
        "Light": 0.9
    })

@app.route('/api/weekly')
def get_weekly():
    return jsonify([
        {"day": "Mon", "usage": 5.2},
        {"day": "Tue", "usage": 4.8},
        {"day": "Wed", "usage": 6.0},
        {"day": "Thu", "usage": 3.9},
        {"day": "Fri", "usage": 5.4},
        {"day": "Sat", "usage": 4.6},
        {"day": "Sun", "usage": 6.2}
    ])

if __name__ == '__main__':
    app.run(debug=True)
