# AI Interview Assistant

An end-to-end AI-powered interview preparation platform that helps candidates:

- Parse resumes using LLMs
- Parse job descriptions
- Calculate ATS match scores
- Identify missing skills
- Generate personalized interview questions
- Provide AI-powered interview feedback

## Tech Stack

- Python
- FastAPI
- Ollama
- Qwen 2.5
- PyMuPDF
- React (Coming Soon)

## Project Status

### Completed
- Environment setup
- PDF Resume Parser
- Local LLM integration with Ollama
- JSON Resume Extraction

### In Progress
- Job Description Parser

### Planned
- ATS Matching
- Interview Question Generator
- FastAPI API
- React Frontend
- Docker Deployment

## Run

```bash
cd ml-service
pip install -r requirements.txt
python app/parser.py
