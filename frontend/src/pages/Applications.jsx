import { useEffect, useState } from "react";
import API from "../services/api";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/applications", {
        headers: {
          Authorization: token,
        },
      });

      setApplications(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Applications</h1>

      {applications.length === 0 ? (
        <p>No Applications Found</p>
      ) : (
        applications.map((app) => (
          <div
            key={app._id}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px",
              marginTop: "20px",
            }}
          >
            <h3>{app.job?.title}</h3>

            <p>
              Company: {app.job?.company}
            </p>

            <p>
              Status: {app.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Applications;