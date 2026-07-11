def jd_parser_prompt(job_text: str):

    return f"""
You are an expert AI Job Description Parser.

Extract structured information from the job description.

Rules:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT write explanations.
4. If information is missing return "" or [].
5. Do NOT guess.
6. Extract ONLY:
   - experience required
   - education
   - required skills
   - preferred skills
   - responsibilities
7. Do NOT extract job title, company, location or employment type.
8. Every skill must be a separate list item.
9. Remove duplicate skills.
10. Responsibilities should be short action statements.

Return exactly this JSON:

{{
    "experience_required": "",
    "education": "",
    "required_skills": [],
    "preferred_skills": [],
    "responsibilities": []
}}

Job Description:

{job_text}
"""