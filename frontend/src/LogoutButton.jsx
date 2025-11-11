// LogoutButton.jsx
import React from "react";

/**
 * Simple placeholder logout button.
 * Implements part of System Design 5.6: Log-Out.
 * Later this will clear the real auth token / session.
 */
function LogoutButton() {
  const handleLogout = () => {
    // TODO: Integrate with backend session / JWT removal
    console.log("User logged out (placeholder).");
    alert("You have been logged out (demo only).");
  };

  return (
    <button type="button" onClick={handleLogout}>
      Log out
    </button>
  );
}

export default LogoutButton;
