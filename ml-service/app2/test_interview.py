import json

from interview_generator import generate_interview_questions

with open("output/resume_gemini.json", encoding="utf-8") as f:
    resume = json.load(f)

with open("output/job.json", encoding="utf-8") as f:
    job = json.load(f)

with open("output/match_result.json", encoding="utf-8") as f:
    match = json.load(f)

questions = generate_interview_questions(
    resume,
    job,
    match
)

print(json.dumps(questions, indent=4))