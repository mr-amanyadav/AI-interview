from jd_parser import parse_job_description
import json
import os

with open("jobs/job3.txt", "r", encoding="utf-8") as f:
    job_text = f.read()

print("Reading Job Description...")

result = parse_job_description(job_text)

# Create output folder if it doesn't exist
os.makedirs("output", exist_ok=True)

# Save JSON
with open("output/job3.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=4)

print("\nSaved to output/job2.json")
print(json.dumps(result, indent=4))