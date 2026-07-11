# def resume_parser_prompt(resume_text: str) -> str:
#     return f"""
# You are an expert AI Resume Parser.

# Extract information from the resume.

# Rules:
# 1. Return ONLY valid JSON.
# 2. No markdown.
# 3. No explanation.
# 4. If information is missing, return an empty string or empty list.
# 5. Keep the JSON concise.
# 6. Do NOT generate project descriptions.
# 7. Do NOT generate dates unless they are clearly present.

# Return JSON in this exact format:

# {{
#   "name": "",
#   "email": "",
#   "phone": "",
#   "skills": [],
#   "education": [
#     {{
#       "degree": "",
#       "institution": ""
#     }}
#   ],
#   "experience": [
#     {{
#       "company": "",
#       "role": ""
#     }}
#   ],
#   "projects": [
#     {{
#       "title": "",
#       "technologies": []
#     }}
#   ]
# }}

# Resume:

# {resume_text}
# """

def resume_parser_prompt(resume_text: str):
    return f"""
Extract the resume into valid JSON.

Return ONLY JSON.

Schema:

{{
  "name": "",
  "email": "",
  "phone": "",
  "skills": [],
  "education": [
    {{
      "degree": "",
      "institution": ""
    }}
  ],
  "experience": [
    {{
      "company": "",
      "role": ""
    }}
  ],
  "projects": [
    {{
      "title": "",
      "technologies": []
    }}
  ]
}}

Resume:

{resume_text}
"""