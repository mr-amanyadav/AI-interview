from pydantic import BaseModel


class ResumeRequest(BaseModel):
    resume: dict


class JDRequest(BaseModel):
    job: dict


class MatchRequest(BaseModel):
    resume: dict
    job: dict


class InterviewRequest(BaseModel):
    resume: dict
    job: dict
    match: dict