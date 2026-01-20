import "./Login.css";
import blacklogo from "../assets/logoblack.png";
import "../global.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    seterror("");
 
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      email: email,
      password: password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      seterror(data.error);
      return;
    }

    localStorage.setItem("user_id", data.user_id);

    navigate("/Home");
  };

  return (
    <div className="maindivlogin">
      <img className="blacklogo" src={blacklogo} alt="logomelofi" />

      <div className="subdiv">
        <h1 className="loginh1">Login</h1>

        <input
          type="email"
          className="email"
          placeholder=" Email:- "
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          type="password"
          className="pswd"
          placeholder=" Password:- "
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button className="signinbtn" onClick={handleLogin}>
          LOGIN
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Link to="/Register">
          <button className="signupbtn">SIGN UP</button>
        </Link>

      </div>
    </div>
  );
}

export default Login;
