import json
import os
import time

from dotenv import load_dotenv
from google import genai

from interview_prompt import interview_prompt

load_dotenv()

from gemini_config import generate_content


def generate_interview_questions(resume, job, match):

    prompt = interview_prompt(resume, job, match)

    print(f"Prompt Length: {len(prompt)}")

    start = time.time()

    response = generate_content(prompt)

    end = time.time()

    print("✅ Interview Questions Generated")
    print(f"Time: {end-start:.2f} sec")

    result = response.text.strip()

    return json.loads(result)