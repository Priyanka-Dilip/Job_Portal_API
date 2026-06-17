import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      setMessage("✅ Registration Successful");

      console.log(res.data);

      navigate("/login");
    } catch (err) {
  console.error(err);
  setMessage("❌ Registration Failed");
}
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Register</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <br /><br />

        <button
          style={buttonStyle}
          onClick={handleRegister}
        >
          Register
        </button>
        {message && (
  <p
    style={{
      marginTop: "15px",
      color: message.includes("Successful")
        ? "lightgreen"
        : "tomato",
      textAlign: "center",
    }}
  >
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

export default Register;