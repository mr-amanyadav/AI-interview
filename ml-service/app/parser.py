import fitz
from llm_parser import parse_resume
import json
import os


def extract_text_from_pdf(pdf_path: str) -> str:
    """
    Extract text from a PDF resume.
    """

    text = ""

    with fitz.open(pdf_path) as document:
        for page in document:
            text += page.get_text()

    return text


if __name__ == "__main__":

    pdf_path = r"resumes\Utkarsh.pdf"

    print("Step 1: Reading PDF...")

    resume_text = extract_text_from_pdf(pdf_path)

    print("✅ PDF extracted")

    print(f"Resume Length: {len(resume_text)} characters")

    print("\nStep 2: Sending to LLM...")

    resume = parse_resume(resume_text)

    print("✅ Resume Parsed Successfully!\n")

    os.makedirs("output", exist_ok=True)

    with open("output/resume_p.json", "w", encoding="utf-8") as f:
        json.dump(resume, f, indent=4)

        
    print("=" * 60)
    print(json.dumps(resume, indent=4))
    print("=" * 60)