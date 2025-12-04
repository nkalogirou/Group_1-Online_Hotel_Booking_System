//Vasilis P.
import React from 'react'; //React components
import { Link } from "react-router-dom";// to navigate to other files
//NOTES 
//used fixed-top bg-body-tertiary to make navbar stay on top (buttons dissapeared for some reason)

// <button className="btn btn-outline-primary me-2" type="button">Log-in</button>
        //  </div>

function MainPage_loggedOut() {
 

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
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hotels</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Booking History</a>
            </li>
          </ul>

          
          <div className="d-flex">
            <Link to="/register" className="btn btn-outline-primary me-2">Register</Link>

            

            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
};
export default MainPage_loggedOut;


