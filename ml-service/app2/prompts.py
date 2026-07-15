def resume_parser_prompt(resume_text: str) -> str:
    return f"""
You are an expert AI Resume Parser.

Extract information from the resume.

Rules:
1. Return ONLY valid JSON.
2. No markdown.
3. No explanation.
4. If information is missing, return an empty string or empty list.
5. Keep the JSON concise.
6. Do NOT generate project descriptions.
7. Do NOT generate dates unless they are clearly present.
8. Separate technical skills from soft skills.
9. Do NOT invent information.
10. Technologies used in projects should appear only in the project's technologies list unless they are also listed in the resume's skills section.

Return JSON in this exact format:

{{
  "name": "",
  "email": "",
  "phone": "",

  "technical_skills": [],
  "soft_skills": [],

  "education": [
    {{
      "degree": "",
      "institution": ""
    }}
  ],

  "experience": [
    {{
      "company": "",
      "role": "",
      "duration": ""
    }}
  ],

  "projects": [
    {{
      "title": "",
      "description": "",
      "technologies": []
    }}
  ],

  "certifications": [],

  "achievements": [],

  "links": {{
    "github": "",
    "linkedin": "",
    "portfolio": ""
  }}
}}

Definitions:

- technical_skills:
  Programming languages, frameworks, libraries, databases, cloud platforms,
  AI/ML tools, APIs, operating systems, developer tools, version control,
  DevOps tools and software technologies.

- soft_skills:
  Leadership, teamwork, communication, problem solving, creativity,
  critical thinking, time management, adaptability and similar interpersonal skills.

Resume:

{resume_text}
"""