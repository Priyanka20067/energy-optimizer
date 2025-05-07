import joblib # type: ignore
import numpy as np

# Load trained model
model = joblib.load('ai_model.pkl')

# Function to get advice
def get_advice(ac, fan, light):
    input_data = np.array([[ac, fan, light]])
    prediction = model.predict(input_data)
    return prediction[0]
