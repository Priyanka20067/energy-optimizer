import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv("usage.csv")
X = df[['ac', 'fan', 'light']]
y = df['advice']

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "ai_model.pkl")
print("✅ Model trained and saved as ai_model.pkl")
