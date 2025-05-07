#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "YourSSID";
const char* password = "YourPASS";
const char* controlURL = "http://YOUR_PC_IP:5000/api/auto-control";

// GPIO pins
int fanPin = 5;
int lightPin = 4;
int acPin = 2;

void setup() {
  Serial.begin(115200);
  pinMode(fanPin, OUTPUT);
  pinMode(lightPin, OUTPUT);
  pinMode(acPin, OUTPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting...");
  }
  Serial.println("WiFi Connected!");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(controlURL);
    http.addHeader("Content-Type", "application/json");

    String json = "{\"ac\": 3.2, \"fan\": 0.4, \"light\": 1.2}";
    int res = http.POST(json);
    if (res == 200) {
      String response = http.getString();
      Serial.println("Control: " + response);

      // Parse manually (basic)
      if (response.indexOf("\"fan\":\"off\"") != -1) digitalWrite(fanPin, LOW);
      else digitalWrite(fanPin, HIGH);

      if (response.indexOf("\"light\":\"off\"") != -1) digitalWrite(lightPin, LOW);
      else digitalWrite(lightPin, HIGH);

      if (response.indexOf("\"ac\":\"off\"") != -1) digitalWrite(acPin, LOW);
      else digitalWrite(acPin, HIGH);
    }

    http.end();
  }

  delay(5000); // Check every 5 seconds
}
