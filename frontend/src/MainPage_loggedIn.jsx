//Vasilis P.
import React from 'react'; //React components
//NOTES 
//used fixed-top bg-body-tertiary to make navbar stay on top (buttons dissapeared for some reason)


function MainPage_loggedIn() {
 

return (

 <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top  ">
  <div className="container-fluid ">
    <a className="navbar-brand " href="#">Navbar</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/pfp.avif" alt="Profile" className="rounded-circle" style={{ width: "32px", height: "32px" }} />
          </a>


           <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#">Profile Options</a></li>
            <li><a className="dropdown-item" href="#">Log-out</a></li>
           </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

);


};
export default MainPage_loggedIn;


