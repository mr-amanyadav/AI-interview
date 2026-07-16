import json
import time
import os

from dotenv import load_dotenv
from google import genai

from jd_prompts import jd_parser_prompt

load_dotenv()

from gemini_config import generate_content


def parse_job_description(job_text):

    job_text = " ".join(job_text.split())

    prompt = jd_parser_prompt(job_text)

    print(f"Prompt Length: {len(prompt)} characters")

    start = time.time()

    response = generate_content(prompt)

    end = time.time()

    print("✅ Response received!")
    print(f"Request completed in {end-start:.2f} seconds")

    result = response.text.strip()

    print("\n===== RAW GEMINI RESPONSE =====")
    print("============================\n")

    try:
        return json.loads(result)

    except json.JSONDecodeError:

        print(result)

        return None