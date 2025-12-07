//Vasilis P.
//import React from 'react'; //React components
import { Link } from "react-router-dom";// to navigate to other files
import React, { useState } from 'react';// for parameter checks

//will use bootstrap to make it easier trying to figure it out
//<h5 className="card-title">Create Your Account</h5>

//const Registration_Page = () => 
//<button type="button" className="btn btn-primary w-100">Sign Up</button> 
//<Link to="/MainLoggedIn" className="btn btn-primary w-100">Sign Up</Link> old sign up button 
///[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(\.[a-z]{2,8})?/ tryed this regex not working properly
//NOTES
//used form-check-inline to made radio buttons horizontal
//used to center container position-absolute top-50 start-50 translate-middle" style={{ maxWidth: 500,  maxHeight: 1000}} 

/*<button className="btn btn-primary w-100" onClick={() =>{
      if (validateEmail() && validatePasswords()) {
        window.location.href = "/MainLoggedIn";
      }
    }}>Sign Up</button>*/ //this only writes if 1 field has an error it doesnt check the other one or both at the same time


/*<div className="form-check form-check-inline">
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
//Me, Christos and Nikos Decided to have premade Admin account rather than giving the option to register as Admin(security reasons)

//Added the navbar from the mainpages

//added <></> to put multiple elements together

//added value={password} onChange={(e) => setPassword(e.target.value)} for password parameter checking
/*const [password, setPassword] = useState("");
const [repeatPassword, setRepeatPassword] = useState("");
const [passwordError, setPasswordError] = useState("");*/ 
function RegistrationPage() {

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

const [email, setEmail] =useState("");
const [emailError, setEmailError] =useState("");

const [password, setPassword] =useState("");
const [repeatPassword, setRepeatPassword] =useState("");
const [passwordError, setPasswordError] =useState("");
  
function validatePasswords() {

  if(password.length < 8) {
    setPasswordError("Password must be longer than 8 characters");
    return false;
  }

  if (password !== repeatPassword) {
    setPasswordError("Passwords do not match");
    
    return false;
  } 

  setPasswordError("");
  return true;

}

function validateEmail() {

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {

  setEmailError("Invalid email format");

  return false;
}

setEmailError("");

return true;
}
return (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
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



    <div className="container position-absolute top-50 start-50 translate-middle" style={{ maxWidth: 500,  maxHeight: 1000}}>
       <div className="card ">
        <div className="card-body ">
          <h3 className="card-title text-center">Create Your Account</h3>

<div className="card ">
  <div className="card-body ">
    

    <div className="form-floating mb-3">
      <input type="UserName" className="form-control" id="floatingUser" placeholder="John Doe" />
      <label htmlFor="floatingUser">Username</label>
    </div>

    <div className="form-floating mb-3">
      <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" 
      value={email} onChange={(e) =>setEmail(e.target.value)} />

      <label htmlFor="floatingEmail">Email address</label>
    </div>

    {emailError && (
      <p style={{ color: "red", marginTop: "-10px" }}>{emailError}</p>
    )}
    
    <div className="form-floating mb-3">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
      value={password} onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    
    <div className="form-floating mb-3">
      <input type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Repeat Password" 
      value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
      <label htmlFor="floatingPasswordRepeat">Repeat Password</label>
    </div>

    {passwordError && (
      <p style={{ color: "red", marginTop: "-10px" }}>{passwordError}</p>
    )}

    
    <button
    
    className="btn btn-primary w-100" onClick={() =>{

    const emailValid = validateEmail();
    const passwordValid = validatePasswords();

       if (validateEmail() && validatePasswords()){
        window.location.href = "/MainLoggedIn";
       }
    }}
    >
      Sign Up</button>
        
        </div>
      </div>
    </div>
  </div>
</div>
  </>
);




};
export default RegistrationPage;


