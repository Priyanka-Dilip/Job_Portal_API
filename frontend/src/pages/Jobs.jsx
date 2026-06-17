import { useEffect, useState } from "react";
import API from "../services/api";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>
        Jobs Page
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            jobId={job._id}
            title={job.title}
            company={job.company}
            salary={job.salary}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Jobs;