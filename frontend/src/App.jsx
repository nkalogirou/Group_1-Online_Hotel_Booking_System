// src/App.jsx
import { useState } from "react";
import "./App.css";
import api from "./apiClient";
import AdminDashboard from "./AdminDashboard";
import ReportsPage from "./ReportsPage";
import BookingHistory from "./BookingHistory";
import RegistrationPage from "./RegistrationPage"; // make sure this file exists

function App() {
  // "login" | "register" | "admin" | "reports" | "history"
  const [view, setView] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null); // logged-in user id

  // ---------- LOGIN HANDLER ----------
    const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const res = await api.post("/auth/login", { email, password });
      const data = res.data;
      console.log("Login response:", data);

      setMessage(data.message || "");

      if (data.token) {
        localStorage.setItem("token", data.token);

        if (data.userId) {
          setUserId(data.userId);
        } else {
          console.warn("Backend did not return userId; using temp ID = 10");
          setUserId(10);
        }

        setView("admin");
      }
    } catch (err) {
      console.error("Login error:", err);

      // If backend responded (e.g. 401, 404, 500), show its message
      if (err.response && err.response.data) {
        setMessage(
          err.response.data.message ||
            `Server error (${err.response.status}).`
        );
      } else {
        // true network error (cannot reach backend at all)
        setMessage("Error contacting server. Is the backend running?");
      }
    }
  };


  // ---------- LOGOUT ----------
  const handleLogout = () => {
    localStorage.removeItem("token");
    setEmail("");
    setPassword("");
    setUserId(null);
    setMessage("You have been logged out.");
    setView("login");
  };

  // ---------- NAV HELPERS ----------
  const goToReports = () => setView("reports");

  const goToHistory = () => {
    if (!userId) {
      alert("No user ID set. Please log in again.");
      setView("login");
      return;
    }
    setView("history");
  };

  const goToAdmin = () => setView("admin");

  // ============================================================
  //                           VIEWS
  // ============================================================

  // ---------- LOGIN VIEW ----------
  if (view === "login") {
    return (
      <main className="app-container" style={{ padding: "2rem" }}>
        <h1>Online Hotel Booking System</h1>
        <h2>Admin Login</h2>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            maxWidth: "320px",
          }}
        >
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {/* THIS submits the form → login */}
          <button type="submit">Log in</button>

          {/* THIS JUST CHANGES VIEW → DOES NOT SUBMIT */}
          <button
            type="button"
            style={{ marginTop: "0.5rem" }}
            onClick={() => setView("register")}
          >
            Create a new account
          </button>
        </form>

        {message && <p style={{ marginTop: "1rem" }}>{message}</p>}

        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Backend login route: <code>POST /auth/login</code> on{" "}
          <code>http://localhost:3000</code>
        </p>
      </main>
    );
  }

  // ---------- REGISTRATION VIEW ----------
  if (view === "register") {
    return (
      <div style={{ padding: "2rem" }}>
        <button type="button" onClick={() => setView("login")}>
          ← Back to Login
        </button>
        <h1 style={{ marginTop: "1rem" }}>Create Your Account</h1>
        <RegistrationPage
          onRegistered={(newEmail) => {
            // after successful registration, go back to login
            setEmail(newEmail || "");
            setMessage("Account created! You can now log in.");
            setView("login");
          }}
        />
      </div>
    );
  }

  // ---------- REPORTS VIEW ----------
  if (view === "reports") {
    return (
      <div>
        <header
          style={{
            padding: "1rem",
            borderBottom: "1px solid #ccc",
            marginBottom: "1rem",
          }}
        >
          <button type="button" onClick={goToAdmin}>
            ← Back to Dashboard
          </button>
        </header>
        <ReportsPage />
      </div>
    );
  }

  // ---------- BOOKING HISTORY VIEW ----------
  if (view === "history") {
    return (
      <div>
        <header
          style={{
            padding: "1rem",
            borderBottom: "1px solid #ccc",
            marginBottom: "1rem",
          }}
        >
          <button type="button" onClick={goToAdmin}>
            ← Back to Dashboard
          </button>
        </header>
        <BookingHistory userId={userId} />
      </div>
    );
  }

  // ---------- DEFAULT: ADMIN DASHBOARD ----------
  return (
    <AdminDashboard
      onLogout={handleLogout}
      onGoToReports={goToReports}
      onGoToHistory={goToHistory}
    />
  );
}

export default App;
