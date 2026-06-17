import { useState } from "react";
import API from "../services/api";

function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleAddJob = async () => {
    try {
      await API.post("/jobs", {
        title,
        company,
        location,
        salary,
        description,
        role: "Full-time",
      });

      setMessage("✅ Job Added Successfully");

      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");
      setDescription("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to Add Job");
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Admin Dashboard</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "15px",
          width: "400px",
          marginTop: "20px",
        }}
      >
        <h2>Add New Job</h2>

        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "90%",
            padding: "12px",
            borderRadius: "10px",
          }}
        />

        <br /><br />

        <button
          onClick={handleAddJob}
          style={buttonStyle}
        >
          Add Job
        </button>

        {message && (
          <p style={{ marginTop: "15px" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "90%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
};

export default AdminDashboard;