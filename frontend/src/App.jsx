import { Routes, Route } from "react-router-dom";
import bgImage from "./assets/background.jpg";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div
  style={{
    display: "flex",
    minHeight: "100vh",
    color: "white",
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.6),
      rgba(0,0,0,0.6)
    ), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;