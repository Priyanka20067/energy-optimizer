#include <WiFi.h>
#include <HTTPClient.h>

// Replace with your details
const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";
const char* serverName = "http://YOUR_PC_IP:5000/iotdata"; // Flask API

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("WiFi Connected!");
}

void loop() {
  float ac = random(25, 45) / 10.0;
  float fan = random(10, 20) / 10.0;
  float light = random(6, 15) / 10.0;

  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverName);
    http.addHeader("Content-Type", "application/json");

    String jsonData = "{\"ac\":" + String(ac, 2) + ",\"fan\":" + String(fan, 2) + ",\"light\":" + String(light, 2) + "}";
    int httpResponseCode = http.POST(jsonData);
    
    Serial.println("Sent: " + jsonData);
    Serial.println("Response: " + String(httpResponseCode));

    http.end();
  }

  delay(5000); // Every 5 sec
}
