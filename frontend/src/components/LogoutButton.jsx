// src/LogoutButton.jsx
import React from "react";

/**
 * Logout button that clears auth token
 * and notifies parent via onLogout callback.
 */
function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    // Remove token from localStorage (backend auth)
    localStorage.removeItem("token");

    if (onLogout) {
      onLogout();
    }

    alert("You have been logged out.");
  };

  return (
    <button type="button" onClick={handleLogout}>
      Log out
    </button>
  );
}

export default LogoutButton;
