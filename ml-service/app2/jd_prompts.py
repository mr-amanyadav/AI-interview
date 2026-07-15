def jd_parser_prompt(job_text: str):

    return f"""
You are an expert AI Job Description Parser.

Extract structured information from the job description.

Rules:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT provide explanations.
4. Do NOT invent or assume information.
5. If information is missing, return "" or [].
6. Extract only information explicitly mentioned in the job description.
7. Separate technical skills and soft skills.
8. Separate required skills and preferred skills.
9. Remove duplicate skills.
10. Each skill must be a separate list item.
11. Responsibilities should be concise action statements.
12. Preserve official technology names (e.g., NumPy, Git, FastAPI, Docker, PostgreSQL).

Return exactly this JSON schema:

{{
  "job_title": "",
  "company": "",
  "location": "",
  "employment_type": "",
  "experience_required": "",
  "education": "",
  "required_technical_skills": [],
  "preferred_technical_skills": [],
  "required_soft_skills": [],
  "preferred_soft_skills": [],
  "responsibilities": []
}}

Job Description:

{job_text}
"""