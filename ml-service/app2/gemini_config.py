import os

from dotenv import load_dotenv
from google import genai
from google.genai.errors import ClientError

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

MODELS = [
    "gemini-2.0-flash",
    "gemini-flash-latest",
]

def generate_content(prompt):

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt
    )

    return response

# def generate_content(prompt):

#     last_error = None

#     for model in MODELS:

#         try:

#             print(f"\n🔄 Trying model: {model}")

#             response = client.models.generate_content(
#                 model=model,
#                 contents=prompt
#             )

#             print(f"✅ Success using {model}")
#             return response

#         except ClientError as e:

#             print(f"❌ {model} failed")
#             last_error = e
#             continue

#     raise last_error