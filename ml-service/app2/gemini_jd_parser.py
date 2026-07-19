import json
import time

from app2.jd_prompts import jd_parser_prompt



from app2.ai.provider import generate


def parse_job_description(job_text):

    job_text = " ".join(job_text.split())

    prompt = jd_parser_prompt(job_text)

    print(f"Prompt Length: {len(prompt)} characters")

    start = time.time()

    response = generate(prompt)

    end = time.time()

    print("✅ Response received!")
    print(f"Request completed in {end-start:.2f} seconds")

    result = response.strip()

    print("\n===== RAW GEMINI RESPONSE =====")
    print("============================\n")

    try:
        return json.loads(result)

    except json.JSONDecodeError:

        print(result)

        return None