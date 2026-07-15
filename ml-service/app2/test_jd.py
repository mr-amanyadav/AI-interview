import json
import os

from gemini_jd_parser import parse_job_description


if __name__ == "__main__":

    with open("jobs/job2.txt", "r", encoding="utf-8") as f:
        job_text = f.read()

    print("Reading Job Description...")

    job = parse_job_description(job_text)

    os.makedirs("output", exist_ok=True)

    with open("output/job_gemini.json", "w", encoding="utf-8") as f:
        json.dump(job, f, indent=4)

    print(json.dumps(job, indent=4))