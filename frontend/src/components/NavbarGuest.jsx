// src/components/NavbarGuest.jsx
import React from "react";

function NavbarGuest() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Side: Logo / Title */}
      <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        Online Hotel Booking
      </div>

      {/* Right Side: Static Links */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="#"
          style={{ color: "white", textDecoration: "none", fontSize: "1rem" }}
        >
          Home
        </a>

        <a
          href="#"
          style={{ color: "white", textDecoration: "none", fontSize: "1rem" }}
        >
          About
        </a>

        <a
          href="#"
          style={{ color: "white", textDecoration: "none", fontSize: "1rem" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavbarGuest;
