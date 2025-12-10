import React from "react";
import Navbar from './Navbar';  // Import Navbar component

function MainPage_loggedIn() {
  return (
    <>
      <Navbar />  {/* Use Navbar here */}
      <div className="container mt-5 pt-5">
        <h1>Welcome to the logged-in page!</h1>
      </div>
    </>
  );
}

export default MainPage_loggedIn;
