import json
import requests
import os
import time

from jd_prompts import jd_parser_prompt
from jd_metadata import extract_metadata


OLLAMA_URL = "http://127.0.0.1:11434/api/generate"


def parse_job_description(job_text: str):
    metadata = extract_metadata(job_text)

    clean_job_text = " ".join(job_text.split())

    prompt = jd_parser_prompt(clean_job_text)

    print(f"Prompt Length: {len(prompt)} characters")

    payload = {
        "model": "qwen2.5:3b",
        "prompt": prompt,
        "stream": False,
        # "format": "json",
        "options": {
            "temperature": 0.1,
            "num_predict": 500
        }
    }

    print("Sending request to Ollama...")

    start = time.time()

    response = requests.post(
        OLLAMA_URL,
        json=payload,
        timeout=300
    )

    end = time.time()

    print("✅ Response received!")
    print(f"Request completed in {end - start:.2f} seconds")


    data = response.json()

    print("\n===== FULL API RESPONSE =====")
    # print(data)
    print("============================\n")

    result = data["response"].strip()

    print("\n===== RAW LLM RESPONSE =====")
    # print(result)
    print("============================\n")

    try:
        result = json.loads(result)


        # Merge metadata into LLM output
        for key, value in metadata.items():
            if value and not result.get(key):
                result[key] = value

        return result

    except json.JSONDecodeError as e:
        print("JSON Error:", e)
        print(result)
        return None