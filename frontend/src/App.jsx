



/*trying to run registration page

import React from 'react';
import RegistrationPage from './RegistrationPage.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

return (

<div className= "App">

<RegistrationPage />


</div>



);


}

export default App;
*/


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage_loggedOut from './MainPage_loggedOut.jsx';
import RegistrationPage from './RegistrationPage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage_loggedOut />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
