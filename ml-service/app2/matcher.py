import json
import time
from app2.matcher_prompt import matcher_prompt
from app2.gemini_config import generate_content

def match_resume(resume, job):

    prompt = matcher_prompt(resume, job)

    print(f"Prompt Length: {len(prompt)}")

    start = time.time()

    response = generate_content(prompt)

    end = time.time()

    print("✅ Matching Complete")
    print(f"Time: {end-start:.2f} sec")

    result = response.text.strip()

    # Remove markdown code fences if Gemini adds them
    if result.startswith("```"):
        result = result.replace("```json", "").replace("```", "").strip()

    # print(result)

    return json.loads(result)