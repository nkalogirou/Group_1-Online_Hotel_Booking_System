//Vasilis P.
import React from 'react'; //React components
import { Link } from "react-router-dom";// to navigate to other files

//will use bootstrap to make it easier trying to figure it out
//<h5 className="card-title">Create Your Account</h5>

//const Registration_Page = () => 
 
  
//NOTES
//used form-check-inline to made radio buttons horizontal
//used to center container position-absolute top-50 start-50 translate-middle" style={{ maxWidth: 500,  maxHeight: 1000}} 



function RegistrationPage() {
 

  

return (


  
      <div class="container position-absolute top-50 start-50 translate-middle" style={{ maxWidth: 500,  maxHeight: 1000}}>
       <div className="card ">
        <div className="card-body ">
          <h3 className="card-title text-center">Create Your Account</h3>

<div className="card ">
  <div className="card-body ">
    
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
</div>

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
    
    <div className="form-floating mb-3">
      <input type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Repeat Password" />
      <label htmlFor="floatingPasswordRepeat">Repeat Password</label>
    </div>
    
    <button type="button" className="btn btn-primary w-100">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>
);




};
export default RegistrationPage;


