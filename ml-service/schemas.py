from pydantic import BaseModel


class JobRequest(BaseModel):
    job_description: str


class MatchRequest(BaseModel):
    resume: dict
    job: dict


class InterviewRequest(BaseModel):
    resume: dict
    job: dict
    match: dict