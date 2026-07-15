import json
import os
import time
from dotenv import load_dotenv
from google import genai
from prompts import resume_parser_prompt

# Load .env
load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)



def parse_resume(resume_text: str):

    resume_text = " ".join(resume_text.split())

    prompt = resume_parser_prompt(resume_text)

    print(f"Prompt Length: {len(prompt)} characters")

    start = time.time()

    response = client.models.generate_content(
        model="gemini-3.1-flash-lite",
        contents=prompt
    )

    end = time.time()

    print("✅ Response received!")
    print(f"Request completed in {end-start:.2f} seconds")

    result = response.text.strip()

    print("\n===== RAW GEMINI RESPONSE =====\n")
    # print(result)
    print("\n============================\n")

    try:
        return json.loads(result)
    except json.JSONDecodeError:
        print(result)
        return None