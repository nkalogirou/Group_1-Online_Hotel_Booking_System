import React from 'react'; //React components
//will use bootstrap to make it easier trying to figure it out


const Registration_Page = () => {

return (

<div className="card">
  <div className="card-body">
    <h5 className="card-title">Create Your Account</h5>
    
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
)



}
