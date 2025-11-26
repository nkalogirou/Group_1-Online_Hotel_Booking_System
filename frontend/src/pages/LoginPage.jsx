// src/pages/LoginPage.jsx
import React, { useState } from "react";
import NavbarGuest from "../components/NavbarGuest";

function LoginPage({ onLogin, onGoRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginClick = () => {
    if (!email || !password) {
      setMessage("Please fill all fields.");
      return;
    }
    onLogin(email, password, setMessage);
  };

  return (
    <div>
      <NavbarGuest />

      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Welcome to the Online Hotel Booking System</h1>
        <p>Please log in to continue</p>

        <div
          style={{
            margin: "2rem auto",
            maxWidth: "350px",
            padding: "1.5rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLoginClick}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Log In
          </button>

          <button
            onClick={onGoRegister}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Create an Account
          </button>

          {message && (
            <p style={{ marginTop: "1rem", color: "red" }}>{message}</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
