import React from "react";
import Navbar from './Navbar';  // Import Navbar component
import SearchForm from "./SearchForm"; // Import SearchForm

function MainPage_loggedOut() {
  return (
    <>
      <Navbar />  {/* Use Navbar here */}
      <div className="container mt-5 pt-5">
        <SearchForm /> {/* Your page content */}
      </div>
    </>
  );
}

export default MainPage_loggedOut;
