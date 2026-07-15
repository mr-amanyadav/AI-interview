import json
import os

from matcher import match_resume


with open("output/resume_gemini.json", encoding="utf-8") as f:
    resume = json.load(f)

with open("output/job2.json", encoding="utf-8") as f:
    job = json.load(f)

result = match_resume(resume, job)

os.makedirs("output", exist_ok=True)

with open("output/match_result.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=4)

print("\n========== RESULT ==========\n")
print(json.dumps(result, indent=4))