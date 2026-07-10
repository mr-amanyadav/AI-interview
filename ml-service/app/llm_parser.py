import json
import requests
import os
import time

from prompts import resume_parser_prompt


OLLAMA_URL = "http://127.0.0.1:11434/api/generate"


def parse_resume(resume_text: str):

    prompt = resume_parser_prompt(resume_text)

    print(f"Prompt Length: {len(prompt)} characters")

    payload = {
        "model": "qwen2.5:7b",
        "prompt": prompt,
        "stream": False,
        "format": "json",
        "options": {
            "temperature": 0,
            "num_predict": 1024
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


    result = response.json()["response"]

    print("\n===== RAW LLM RESPONSE =====\n")
    # print(result)
    print("\n============================\n")

    return json.loads(result)