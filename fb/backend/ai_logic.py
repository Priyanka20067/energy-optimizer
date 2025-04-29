# ai_logic.py
import joblib
import numpy as np

# Load your saved AI model
model = joblib.load('ai_model.pkl')

def get_advice(ac, fan, light):
    input_data = np.array([[ac, fan, light]])
    prediction = model.predict(input_data)
    return prediction[0]
