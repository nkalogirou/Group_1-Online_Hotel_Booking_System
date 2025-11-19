// src/RegistrationPage.jsx
import React, { useState } from "react";
import api from "./apiClient"; // axios instance

/**
 * Props:
 *  - onRegistered(newEmail?: string): called when registration succeeds
 */
const RegistrationPage = ({ onRegistered }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!name || !email || !password || !repeatPassword) {
      setMessage("Please fill all fields.");
      return;
    }

    if (password !== repeatPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      const data = res.data;
      setMessage(data.message || "Registered successfully.");

      // If registration ok, tell parent so it can go back to login
      if (data.message && data.message.toLowerCase().includes("successful")) {
        if (onRegistered) {
          onRegistered(email);
        }
      }
    } catch (err) {
      console.error("Register error:", err);
      setMessage("Error contacting server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title mb-3">Create Your Account</h3>

          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Repeat Password</label>
              <input
                type="password"
                className="form-control"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder="Repeat password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {message && <p className="mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
