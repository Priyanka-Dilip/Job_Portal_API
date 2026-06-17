import JobCard from "../components/JobCard";

function Dashboard() {
  return (
    <div>
      <h1 style={{ color: "white", fontSize: "35px" }}>
        Dashboard
      </h1>

      <p style={{ color: "#94a3b8" }}>
        Welcome to Job Portal Dashboard
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <JobCard
          title="Frontend Developer"
          company="Google"
          salary="$5000/month"
          location="Bangalore"
        />

        <JobCard
          title="Backend Developer"
          company="Amazon"
          salary="$6000/month"
          location="Hyderabad"
        />

        <JobCard
          title="UI UX Designer"
          company="Meta"
          salary="$4500/month"
          location="Pune"
        />
      </div>
    </div>
  );
}

export default Dashboard;