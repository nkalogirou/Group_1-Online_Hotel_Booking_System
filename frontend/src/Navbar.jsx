import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotels">Rooms</Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/booking-history">Booking History</Link>
              </li>
            )}
          </ul>

          <div className="d-flex">
            {!isLoggedIn ? (
              <>
                <Link to="/register" className="btn btn-outline-primary me-2">Register</Link>
                <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
              </>
            ) : (
              <button onClick={onLogout} className="btn btn-outline-danger me-2">Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
