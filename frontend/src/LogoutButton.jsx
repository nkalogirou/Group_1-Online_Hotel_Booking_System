// Developer: Nikos K.
// Requirements: 5.6 Log-Out, 5.6.1 Logout Menu Access

import React from "react";

export default function LogoutButton() {
  const handleLogout = () => {
    // Remove authentication token (name can be adjusted later)
    localStorage.removeItem("token");

    // Redirect user to login page
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
}
