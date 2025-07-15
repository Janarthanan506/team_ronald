import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // logout
    navigate("/login"); // go back to login
  };

  return (
    <header className="header">
      Welcome Back 👋
      <button onClick={handleLogout} style={{ float: "right" }}>Logout</button>
    </header>
  );
}
