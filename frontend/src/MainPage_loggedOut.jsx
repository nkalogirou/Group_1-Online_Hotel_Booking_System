//Vasilis P.
import React from 'react'; //React components
//NOTES 
//used fixed-top bg-body-tertiary to make navbar stay on top (buttons dissapeared for some reason)


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
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>

          
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2" type="button">Register</button>
            <button className="btn btn-outline-primary me-2" type="button">Log-in</button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};
export default MainPage_loggedOut;


