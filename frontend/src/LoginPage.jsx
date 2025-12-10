import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Navbar from './Navbar';  // Import Navbar component

function LoginPage({ onLogin }) {  // Ensure onLogin is passed as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();  // Initialize useNavigate hook

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate login form
    if (email.length === 0 || password.length === 0) {
      setLoginError("Email and password are required.");
      return;
    }

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Save the JWT token in localStorage
          localStorage.setItem("token", data.token);

          // Call onLogin to update the login state in App.jsx
          onLogin();

          // Redirect to booking history page
          navigate("/booking-history");
        } else {
          setLoginError("Invalid credentials");
        }
      })
      .catch((error) => {
        setLoginError("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container position-absolute top-50 start-50 translate-middle" style={{ maxWidth: 500, maxHeight: 1000 }}>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Login</h3>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            {loginError && <p style={{ color: "red", marginTop: "-10px" }}>{loginError}</p>}

            <button
              className="btn btn-primary w-100"
              onClick={handleLogin}  // Call the login handler
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
