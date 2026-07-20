import fitz
import json
import os

from app2.gemini_resume_parser import parse_resume

def extract_text_from_pdf(pdf):

    text = ""

    if isinstance(pdf, bytes):
        doc = fitz.open(stream=pdf, filetype="pdf")
    else:
        doc = fitz.open(pdf)

    with doc:
        for page in doc:
            text += page.get_text()

    return text

if __name__ == "__main__":

    pdf_path = r"resumes\Utkarsh.pdf"

    print("Step 1: Reading PDF...")

    resume_text = extract_text_from_pdf(pdf_path)

    print("✅ PDF extracted")

    print(f"Resume Length: {len(resume_text)} characters")


    resume = parse_resume(resume_text)

    os.makedirs("output", exist_ok=True)

    with open("output/resume_gemini.json", "w", encoding="utf-8") as f:
        json.dump(resume, f, indent=4)

    print(json.dumps(resume, indent=4))