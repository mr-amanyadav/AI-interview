import fitz


def extract_text_from_pdf(pdf_path: str) -> str:
    """
    Extract all text from a PDF.
    """

    with fitz.open(pdf_path) as document:
        text = ""

        for page in document:
            text += page.get_text()

    return text


if __name__ == "__main__":
    pdf_path = "resumes/sample_resume.pdf"

    resume_text = extract_text_from_pdf(pdf_path)

    print("=" * 60)
    print("RESUME TEXT")
    print("=" * 60)
    print(resume_text)