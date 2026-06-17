import { useState } from "react";
import API from "../services/api";

function JobCard({ jobId, title, company, salary, location }) {
  const [message, setMessage] = useState("");

  const handleApply = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/applications/apply",
        { jobId },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setMessage("✅ Applied Successfully");
    } catch (err) {
      console.error(err);
      setMessage("❌ Application Failed");
    }
  };

  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "18px",
        width: "280px",
        boxShadow: "0 0 15px rgba(56,189,248,0.2)",
      }}
    >
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{salary}</p>
      <p>{location}</p>

      <button
        onClick={handleApply}
        style={{
          marginTop: "15px",
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>

      {message && (
        <p style={{ marginTop: "10px" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default JobCard;