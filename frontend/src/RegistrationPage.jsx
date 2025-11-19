//Vasilis P.
import React from 'react'; //React components
//will use bootstrap to make it easier trying to figure it out
//<h5 className="card-title">Create Your Account</h5>

//const Registration_Page = () => 
 
  
//NOTES
//used form-check-inline to made radio buttons horizontal

function RegistrationPage() {

return (

    <div className="container">
       <div className="card" >
        <div className="card-body ">
          <h3 className="card-title">Create Your Account</h3>

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
