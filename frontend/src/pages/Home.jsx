import { useState } from "react";
import api from "../api/api";
import authApi from "../api/auth";


import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import JDUpload from "../components/JDUpload";
import MatchResult from "../components/MatchResult";
import InterviewQuestions from "../components/InterviewQuestions";
import Loading from "../components/Loading";

function Home() {
  const [resume, setResume] = useState(null);
  const [jdText, setJdText] = useState("");
  const [jdFile, setJdFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [match, setMatch] = useState(null);
  const [questions, setQuestions] = useState(null);

  const analyzeResume = async () => {
    if (!resume) {
      toast.error("Please upload your resume.");
      return;
    }

    if (!jdText && !jdFile) {
      toast.error("Please provide a Job Description.");
      return;
    }

    try {
      setLoading(true);

      // --------------------------
      // Parse Resume
      // --------------------------

      const resumeForm = new FormData();
      resumeForm.append("file", resume);

      const resumeResponse = await api.post(
        "/parse-resume",
        resumeForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const resumeJson = resumeResponse.data;

      // --------------------------
      // Parse JD
      // --------------------------

      const jdForm = new FormData();

      if (jdText) {
        jdForm.append("text", jdText);
      }

      if (jdFile) {
        jdForm.append("file", jdFile);
      }

      const jdResponse = await api.post(
        "/parse-jd",
        jdForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const jobJson = jdResponse.data;

      // --------------------------
      // Match
      // --------------------------

      const matchResponse = await api.post("/match", {
        resume: resumeJson,
        job: jobJson,
      });

      const matchJson = matchResponse.data;

      setMatch(matchJson);

      // --------------------------
      // Interview Questions
      // --------------------------

const interviewResponse = await api.post(
  "/generate-interview",
  {
    resume: resumeJson,
    job: jobJson,
    match: matchJson,
  }
);

setQuestions(interviewResponse.data);

// Save interview to backend (MongoDB)
await authApi.post("/history", {
  resume: resumeJson,
  job: jobJson,
  match: matchJson,
  questions: interviewResponse.data,
});

toast.success("Analysis completed successfully!");



    } catch (err) {
      console.log(err);

      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
  <div className="min-h-screen bg-slate-100">

    <Navbar />

    <div className="max-w-7xl mx-auto p-8">

      <div className="grid md:grid-cols-2 gap-8">

        <ResumeUpload
          setResume={setResume}
        />

        <JDUpload
          jdText={jdText}
          setJdText={setJdText}
          setJdFile={setJdFile}
        />

      </div>

      <div className="text-center my-10">

        <button
          onClick={analyzeResume}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-lg"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

      </div>

      {loading && <Loading />}

      {match && <MatchResult match={match} />}

            {questions && (
        <InterviewQuestions
          questions={questions}
        />
      )}

    </div>

  </div>
);
}

export default Home;