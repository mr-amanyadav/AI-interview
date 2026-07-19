import { useEffect, useState } from "react";
import authApi from "../api/auth";
import Navbar from "../components/Navbar";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await authApi.get("/history");
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">
          Interview History
        </h1>

        {history.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <p>No interviews found.</p>
          </div>
        ) : (
          history.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md p-6 mb-6"
            >
              <h2 className="text-xl font-bold">
                {item.job?.job_title || "Job Position"}
              </h2>

              <p className="mt-2">
                <strong>Company:</strong>{" "}
                {item.job?.company || "Not Specified"}
              </p>

              <p className="mt-2">
                <strong>Match Score:</strong>{" "}
                {item.match?.overall_match}%
              </p>

              <p className="text-gray-500 mt-3">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;