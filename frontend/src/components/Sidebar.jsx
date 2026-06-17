import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        padding: "30px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#38bdf8" }}>Job Portal</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <Link to="/" style={linkStyle}>Dashboard</Link>

        <Link to="/jobs" style={linkStyle}>Jobs</Link>

        <Link to="/applications" style={linkStyle}>Applications</Link>

        <Link to="/profile" style={linkStyle}>Profile</Link>

        <Link to="/admin" style={linkStyle}>Admin</Link>

        <Link to="/login" style={linkStyle}>Login</Link>

        <Link to="/register" style={linkStyle}>Register</Link>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};

export default Sidebar;