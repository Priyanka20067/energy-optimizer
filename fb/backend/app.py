from flask import Flask, jsonify, request
from flask_cors import CORS
from ai_logic import get_advice

app = Flask(__name__)
CORS(app)

# Step 1: Store IoT data in memory
latest_iot_data = {"AC": 0, "Fan": 0, "Light": 0}

# Step 2: POST route for ESP32/IoT to send data
@app.route('/iotdata', methods=['POST'])
def receive_iot():
    global latest_iot_data
    data = request.get_json()
    latest_iot_data = {
        "AC": data.get("ac", 0),
        "Fan": data.get("fan", 0),
        "Light": data.get("light", 0)
    }
    print("Received IoT Data:", latest_iot_data)
    return jsonify({"status": "success"})

# Step 3: React will fetch this for dashboard
@app.route('/api/usage')
def get_usage():
    return jsonify(latest_iot_data)

# Step 4: For chart
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

# Step 5: POST AI prediction route
@app.route('/api/advice', methods=['POST'])
def get_ai_suggestion():
    data = request.get_json()
    ac = data.get('ac', 0)
    fan = data.get('fan', 0)
    light = data.get('light', 0)
    advice = get_advice(ac, fan, light)
    return jsonify({ "advice": advice })

if __name__ == '__main__':
    app.run(debug=True)
