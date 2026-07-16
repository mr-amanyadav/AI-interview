from fastapi import FastAPI

app = FastAPI(title="AI Interview API")


@app.get("/")
def home():
    return {
        "message": "AI Interview Backend Running 🚀"
    }