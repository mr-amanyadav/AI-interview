import json
import requests
import os
import time

from prompts import resume_parser_prompt


OLLAMA_URL = "http://127.0.0.1:11434/api/generate"


def parse_resume(resume_text: str):
    resume_text = " ".join(resume_text.split())
    prompt = resume_parser_prompt(resume_text)

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
        return json.loads(result)
    except json.JSONDecodeError as e:
        print("JSON Error:", e)
        print(result)
        return None