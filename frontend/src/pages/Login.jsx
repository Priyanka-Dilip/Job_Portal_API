import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      setMessage("✅ Login Successful");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {
      console.error(err);
      setMessage("❌ Invalid Email or Password");
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Login</h1>

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
          onClick={handleLogin}
        >
          Login
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

export default Login;