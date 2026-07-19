function Section({ title, questions }) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="space-y-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 border-l-4 border-indigo-500"
          >
            <p className="font-medium text-gray-800">
              {q.question}
            </p>

            {"difficulty" in q && (
              <span className="inline-block mt-3 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                {q.difficulty}
              </span>
            )}

            {"project" in q && (
              <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {q.project}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function InterviewQuestions({ questions }) {
  return (
    <div className="mt-10">

      <h1 className="text-3xl font-bold mb-8">
        Interview Questions
      </h1>

      <Section
        title="Technical Questions"
        questions={questions.technical_questions}
      />

      <Section
        title="Project Questions"
        questions={questions.project_questions}
      />

      <Section
        title="Behavioral Questions"
        questions={questions.behavioral_questions}
      />

      <Section
        title="HR Questions"
        questions={questions.hr_questions}
      />

    </div>
  );
}

export default InterviewQuestions;