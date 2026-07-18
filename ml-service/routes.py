from fastapi import APIRouter, UploadFile, File, Form, HTTPException

from app2.parser import extract_text_from_pdf
from app2.gemini_resume_parser import parse_resume
from app2.gemini_jd_parser import parse_job_description
from schemas import MatchRequest, InterviewRequest

from app2.matcher import match_resume
from app2.interview_generator import generate_interview_questions




router = APIRouter()


@router.post("/parse-resume")
async def parse_resume_api(file: UploadFile = File(...)):

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Please upload a PDF.")

    pdf_bytes = await file.read()

    resume_text = extract_text_from_pdf(pdf_bytes)

    return parse_resume(resume_text)


@router.post("/parse-jd")
async def parse_jd_api(
    text: str = Form(None),
    file: UploadFile = File(None)
):

    if text and file:
        raise HTTPException(
            status_code=400,
            detail="Please provide either text OR a PDF, not both."
        )

    if not text and not file:
        raise HTTPException(
            status_code=400,
            detail="Provide either job description text or PDF."
        )

    if file:

        if not file.filename.lower().endswith(".pdf"):
            raise HTTPException(
                status_code=400,
                detail="Only PDF files are supported."
            )

        pdf_bytes = await file.read()
        jd_text = extract_text_from_pdf(pdf_bytes)

    else:
        jd_text = text

    return parse_job_description(jd_text)


@router.post("/match")
async def match_api(data: MatchRequest):

    result = match_resume(
        data.resume,
        data.job
    )

    return result


@router.post("/generate-interview")
async def interview_api(data: InterviewRequest):

    result = generate_interview_questions(
        data.resume,
        data.job,
        data.match
    )

    return result