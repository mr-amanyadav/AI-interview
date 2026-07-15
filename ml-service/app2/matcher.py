import json
import time
import os

from dotenv import load_dotenv
from google import genai

from matcher_prompt import matcher_prompt

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def match_resume(resume, job):

    prompt = matcher_prompt(resume, job)

    print(f"Prompt Length: {len(prompt)}")

    start = time.time()

    response = client.models.generate_content(
        model="gemini-3.1-flash-lite",
        contents=prompt
    )

    end = time.time()

    print("✅ Matching Complete")
    print(f"Time: {end-start:.2f} sec")

    result = response.text.strip()

    print(result)

    return json.loads(result)