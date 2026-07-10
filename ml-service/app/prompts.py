def resume_parser_prompt(resume_text: str) -> str:
    return f"""
You are an expert AI Resume Parser.

Your task is to extract structured information from the resume.

Rules:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT write explanations.
4. If information is missing, return an empty string or empty list.
5. Extract as much information as possible.

If you cannot fit the entire JSON, continue until the JSON object is complete.
Never return partial JSON.

Return JSON in this format:

{{
    "name": "",
    "email": "",
    "phone": "",
    "skills": [],
    "education": [],
    "experience": [],
    "projects": []
}}

Resume:

{resume_text}
"""