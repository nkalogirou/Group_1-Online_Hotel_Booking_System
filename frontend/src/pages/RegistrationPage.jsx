// src/pages/RegistrationPage.jsx
import React, { useState } from "react";
import NavbarGuest from "../components/NavbarGuest";

function RegistrationPage({ onRegister, onGoLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // default selection
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterClick = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setMessage("All fields are required.");
      return;
    }

    onRegister(formData, setMessage);
  };

  return (
    <div>
      <NavbarGuest />

      <main style={{ padding: "2rem" }}>
        <h1 style={{ textAlign: "center" }}>
          Create a New Account
        </h1>

        <div
          style={{
            maxWidth: "400px",
            margin: "2rem auto",
            padding: "1.5rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            />
          </div>

          {/* Role Selection (admin/user) */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                background: "white",
              }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            onClick={handleRegisterClick}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>

          {/* Back to login */}
          <button
            onClick={onGoLogin}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Back to Login
          </button>

          {/* Message */}
          {message && (
            <p style={{ marginTop: "1rem", color: "red", textAlign: "center" }}>
              {message}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default RegistrationPage;
