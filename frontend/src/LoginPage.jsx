//Vasilis P.
import React from 'react'; //React components
import { Link } from "react-router-dom";// to navigate to other files

//will use bootstrap to make it easier trying to figure it out
//<h5 className="card-title">Create Your Account</h5>
 
  
//NOTES
//used form-check-inline to made radio buttons horizontal
//used to center container position-absolute top-50 start-50 translate-middle" style={{ maxWidth: 500,  maxHeight: 1000}} 


/*removed radio buttons for login page
<div className="form-check form-check-inline">
  <input className="form-check-input form-check-inline" type="radio" name="radioDefault" id="radioDefault1" />
  <label className="form-check-label" htmlFor="radioDefault1">
    User
  </label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input form-check-inline" type="radio" name="radioDefault" id="radioDefault2" defaultChecked />
  <label className="form-check-label" htmlFor="radioDefault2">
    Admin
  </label>
</div>*/

//added <></> to put multiple elements together

function LoginPage() {
 

  

return (
  <>

  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top"> {/* Navbar at top of page */}
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
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
    </div>
  </div>
</nav>



  
      <div className="container position-absolute top-50 start-50 translate-middle" style={{ maxWidth: 500,  maxHeight: 1000}}> {/* changed class→className for React */}
       <div className="card ">
        <div className="card-body ">
          <h3 className="card-title text-center">Login</h3>

<div className="card ">
  <div className="card-body ">
    
    <div className="form-floating mb-3">
      <input type="UserName" className="form-control" id="floatingInput" placeholder="John Doe" />
      <label htmlFor="floatingInput">Username</label>
    </div>

    <div className="form-floating mb-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    
    <div className="form-floating mb-3">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    
    
    <button type="button" className="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>

  </> 
);




};
export default LoginPage;


