import json
# import os
import time
# from dotenv import load_dotenv
# from google import genai
from app2.prompts import resume_parser_prompt
from app2.gemini_config import generate_content

def parse_resume(resume_text: str):

    resume_text = " ".join(resume_text.split())

    prompt = resume_parser_prompt(resume_text)

    print(f"Prompt Length: {len(prompt)} characters")

    start = time.time()

    response = generate_content(prompt)

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