import "./Register.css";
import blacklogo from "../assets/logoblack.png";
import "../global.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = async () => {
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const response = await fetch("http://localhost:5000/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      return;
    }
    navigate("/");
  };
  return (
    <div className="maindivregister">
      <img className="blacklogo" src={blacklogo} alt="logo" />
      <input
        type="email"
        className="email"
        placeholder=" Email:-"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="pswd"
        placeholder=" Password:-"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className="cpswd"
        placeholder=" Confirm Password:-"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="registerbtn" onClick={handleRegister}>
        Register
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Register;
