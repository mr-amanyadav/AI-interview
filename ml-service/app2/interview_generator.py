import json
import time
import re

from app2.interview_prompt import interview_prompt
from app2.ai.provider import generate


def generate_interview_questions(resume, job, match):

    prompt = interview_prompt(resume, job, match)

    print(f"Prompt Length: {len(prompt)}")

    start = time.time()

    result = generate(prompt)

    end = time.time()

    print("✅ Interview Questions Generated")
    print(f"Time: {end-start:.2f} sec")

    print("\n==============================")
    print(result)
    print("==============================\n")

    # Remove Markdown code fences if present
    result = result.strip()

    if result.startswith("```json"):
        result = result.replace("```json", "", 1)

    if result.startswith("```"):
        result = result.replace("```", "", 1)

    if result.endswith("```"):
        result = result[:-3]

    result = result.strip()

    # Extract JSON object
    match = re.search(r"\{.*\}", result, re.DOTALL)

    if not match:
        raise Exception("No valid JSON found in AI response.")

    json_text = match.group()

    return json.loads(json_text)