import requests


url = "http://127.0.0.1:11434/api/generate"

payload = {
    "model": "qwen2.5:7b",
    "prompt": "Say only Hello",
    "stream": False
}

print("Sending request...")

response = requests.post(
    url,
    json=payload,
    timeout=120
)

print("\nStatus Code:", response.status_code)

print("\nResponse:")

print("\nStatus Code:", response.status_code)

data = response.json()

print("\nModel:", data["model"])
print("Response:", data["response"])
print("Done:", data["done"])