import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authApi from "../api/auth";
import Navbar from "../components/Navbar";

function InterviewDetails() {
  const { id } = useParams();

  const [interview, setInterview] = useState(null);

  useEffect(() => {
    fetchInterview();
  }, []);

  const fetchInterview = async () => {
    try {
      const res = await authApi.get(`/history/${id}`);
      setInterview(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!interview) {
    return (
      <div className="min-h-screen bg-slate-100">
        <Navbar />
        <div className="text-center mt-20">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-3xl font-bold mb-6">
          {interview.job?.job_title}
        </h1>

        <h2 className="text-2xl mb-4">
          Match Score: {interview.match?.overall_match}%
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-xl mb-4">
              Matched Skills
            </h2>

            <ul>
              {interview.match?.matched_technical_skills?.map((skill) => (
                <li key={skill}>✅ {skill}</li>
              ))}
            </ul>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-xl mb-4">
              Missing Skills
            </h2>

            <ul>
              {interview.match?.missing_technical_skills?.map((skill) => (
                <li key={skill}>❌ {skill}</li>
              ))}
            </ul>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Technical Questions
          </h2>

          <ul>
            {interview.questions?.technical_questions?.map((q, i) => (
              <li key={i} className="mb-3">
                • {q.question}
              </li>
            ))}
          </ul>

        </div>

        <div className="bg-white rounded-xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Behavioral Questions
          </h2>

          <ul>
            {interview.questions?.behavioral_questions?.map((q, i) => (
              <li key={i} className="mb-3">
                • {q.question}
              </li>
            ))}
          </ul>

        </div>

        <div className="bg-white rounded-xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">
            HR Questions
          </h2>

          <ul>
            {interview.questions?.hr_questions?.map((q, i) => (
              <li key={i} className="mb-3">
                • {q.question}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
}

export default InterviewDetails;