import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); // mark user as logged in
    navigate("/dashboard"); // go to dashboard
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
