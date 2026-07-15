def matcher_prompt(resume, job):

    return f"""
You are an expert ATS Resume Matcher.

Your task is to compare the parsed resume and parsed job description.

IMPORTANT:

Do NOT compare only exact words.

Perform semantic matching.

Examples:

- FastAPI, Flask → Python Backend Development
- GitHub → Git
- REST APIs → API Development
- Critical Thinking ↔ Analytical Thinking
- Team Work ↔ Collaboration
- ML ↔ Machine Learning
- AI ↔ Artificial Intelligence
- Generative AI ↔ LLM Development
- Docker + Deployment → Scalable Systems
- Backend Projects → Software Engineering Experience

If two skills clearly represent the same concept, count them as MATCHED.

Do NOT mark a skill as missing if an equivalent skill exists.

Use the resume experience, projects, certifications, and achievements while matching.

Evaluate:

1. Technical skills
2. Soft skills
3. Experience relevance
4. Projects relevance
5. Education relevance

Scoring Rules:

- overall_match: 0-100
- technical_skill_match: 0-100
- soft_skill_match: 0-100

Recommendations should only mention genuinely missing or weak areas.

Return ONLY valid JSON.

Schema:

{{
  "overall_match": 0,
  "technical_skill_match": 0,
  "soft_skill_match": 0,
  "missing_technical_skills": [],
  "missing_soft_skills": [],
  "matched_technical_skills": [],
  "matched_soft_skills": [],
  "strengths": [],
  "recommendations": []
}}

Resume:

{resume}

Job Description:

{job}
"""