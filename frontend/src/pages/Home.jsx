import { useState } from "react";
import api from "../api/api";

function Home() {
  const [resume, setResume] = useState(null);
  const [jdText, setJdText] = useState("");
  const [jdFile, setJdFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [match, setMatch] = useState(null);
  const [questions, setQuestions] = useState(null);

  const analyzeResume = async () => {
    if (!resume) {
      alert("Upload Resume");
      return;
    }

    if (!jdText && !jdFile) {
      alert("Provide Job Description");
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

      alert("Analysis Complete");
    } catch (err) {
      console.log(err);

      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h1>AI Interview Assistant</h1>

      <hr />

      <h2>Resume</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResume(e.target.files[0])}
      />

      <br />
      <br />

      <h2>Job Description</h2>

      <textarea
        rows={10}
        style={{ width: "100%" }}
        value={jdText}
        onChange={(e) => setJdText(e.target.value)}
      />

      <br />
      <br />

      <h3>OR Upload JD PDF</h3>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setJdFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={analyzeResume}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      <hr />

      {match && (
        <>
          <h2>Match Result</h2>

          <h3>Overall Match: {match.overall_match}%</h3>

          <h4>Matched Skills</h4>

          <ul>
            {match.matched_technical_skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h4>Missing Skills</h4>

          <ul>
            {match.missing_technical_skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      <hr />

      {questions && (
        <>
          <h2>Interview Questions</h2>

          <h3>Technical</h3>

          <ul>
            {questions.technical_questions.map((q, i) => (
              <li key={i}>
                {q.question}
              </li>
            ))}
          </ul>

          <h3>Behavioral</h3>

          <ul>
            {questions.behavioral_questions.map((q, i) => (
              <li key={i}>
                {q.question}
              </li>
            ))}
          </ul>

          <h3>HR</h3>

          <ul>
            {questions.hr_questions.map((q, i) => (
              <li key={i}>
                {q.question}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Home;