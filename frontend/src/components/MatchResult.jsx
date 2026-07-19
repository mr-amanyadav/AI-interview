function MatchResult({ match }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Resume Match Analysis
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-indigo-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">
            Overall Match
          </h3>

          <p className="text-5xl font-bold text-indigo-600 mt-3">
            {match.overall_match}%
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">
            Technical Skills
          </h3>

          <p className="text-5xl font-bold text-green-600 mt-3">
            {match.technical_skill_match}%
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">
            Soft Skills
          </h3>

          <p className="text-5xl font-bold text-blue-600 mt-3">
            {match.soft_skill_match}%
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-700">
            Matched Skills
          </h3>

          <div className="flex flex-wrap gap-2">

            {match.matched_technical_skills.map((skill) => (
              <span
                key={skill}
                className="bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-700">
            Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2">

            {match.missing_technical_skills.map((skill) => (
              <span
                key={skill}
                className="bg-red-100 text-red-700 px-3 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div>

          <h3 className="text-xl font-semibold mb-3">
            Strengths
          </h3>

          <ul className="space-y-2">

            {match.strengths.map((item, index) => (
              <li key={index}>
                ✅ {item}
              </li>
            ))}

          </ul>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-3">
            Recommendations
          </h3>

          <ul className="space-y-2">

            {match.recommendations.map((item, index) => (
              <li key={index}>
                💡 {item}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

export default MatchResult;