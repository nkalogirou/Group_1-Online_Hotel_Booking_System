//Vasilis P.
import React from 'react'; //React components
import { Link } from "react-router-dom";// to navigate to other files
//NOTES 
//used fixed-top bg-body-tertiary to make navbar stay on top (buttons dissapeared for some reason)

// <button className="btn btn-outline-primary me-2" type="button">Log-in</button>
        //  </div>

function MainPage_loggedOut() {
 

return (
  <>
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

<div className="pt-5" style={{ minHeight: "100vh", minWidth: "150vw" }}>

  
<div className="container">
    
    <div className="w-75 mx-auto"> 
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-inner">
<div className="carousel-item active">
<img src="/carousel1.jpg" className="d-block w-100" alt="Slide 1" />
</div>
<div className="carousel-item">
<img src="/carousel2.jpg" className="d-block w-100" alt="Slide 2" />
</div>
<div className="carousel-item">
<img src="/carousel3.jpg" className="d-block w-100" alt="Slide 3" />
</div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
<span className="carousel-control-prev-icon"></span>
</button>

<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
<span className="carousel-control-next-icon"></span>
</button>

</div>
</div>
  </div>
</div>

  </>
  );
};
export default MainPage_loggedOut;


