import os

from .gemini_provider import generate as gemini_generate
from .groq_provider import generate as groq_generate

AI_PROVIDER = os.getenv("AI_PROVIDER", "groq")


def generate(prompt):

    if AI_PROVIDER.lower() == "gemini":
        return gemini_generate(prompt)

    elif AI_PROVIDER.lower() == "groq":
        return groq_generate(prompt)

    raise Exception("Invalid AI_PROVIDER in .env")