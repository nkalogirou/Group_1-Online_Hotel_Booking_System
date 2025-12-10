import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Navbar from './Navbar';  // Import Navbar component

function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate hook

  // Validate form fields
  function validateLogin() {
    if (!name || !email || !password || !repeatPassword) {
      setLoginError("All fields are required.");
      return false;
    }
    if (password !== repeatPassword) {
      setLoginError("Passwords do not match.");
      return false;
    }
    setLoginError("");
    return true;
  }

  // Handle registration
  const handleRegistration = () => {
    console.log("Sign Up button clicked");  // Log when the button is clicked
    if (validateLogin()) {
      console.log("Form validated");  // Log if the form is validated
      fetch('http://localhost:3000/auth/register', {  // Update URL to match backend (localhost:3000)
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.userId) {
            console.log('Registration successful');
            navigate("/login");  // Redirect to login page after successful registration
          } else {
            console.log(data.message);  // Display error message from backend
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };


  return (
    <>
      <Navbar />  {/* Use Navbar here */}
      <div className="container position-absolute top-50 start-50 translate-middle" style={{ maxWidth: 500, maxHeight: 1000 }}>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Create Your Account</h3>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingUsername"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingUsername">Username</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Email address"
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

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPasswordRepeat"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <label htmlFor="floatingPasswordRepeat">Repeat Password</label>
            </div>

            {loginError && <p style={{ color: "red", marginTop: "-10px" }}>{loginError}</p>}

            <button
              className="btn btn-primary w-100"
              onClick={handleRegistration}  // Call the registration handler
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
