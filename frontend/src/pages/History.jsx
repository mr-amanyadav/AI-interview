import { useEffect, useState } from "react";
import authApi from "../api/auth";

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
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>Interview History</h1>

      {history.length === 0 ? (
        <p>No interviews found.</p>
      ) : (
        history.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3>{item.job?.job_title}</h3>

            <p>
              <strong>Company:</strong> {item.job?.company}
            </p>

            <p>
              <strong>Match:</strong> {item.match?.overall_match}%
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default History;