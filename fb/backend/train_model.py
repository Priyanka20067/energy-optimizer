import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
df = pd.read_csv('usage.csv')
X = df[['ac', 'fan', 'light']]
y = df['advice']

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, 'ai_model.pkl')
print("✅ AI model saved as ai_model.pkl")
