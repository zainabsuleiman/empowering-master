
import React from 'react';
import './App.css';
import Create from './ui/pages/signinPage/Create';
import Reset from './ui/pages/signinPage/Reset';
import Signinl from './ui/pages/signinPage/Signinl';
import HomePage from './ui/pages/homePage/homePage';
// import SigninPage from './ui/pages/signinPage/signinPage';
import {BrowserRouter  , Routes ,Route} from 'react-router-dom';
import Container from './folder/pages/container/container';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
    

     
      {/* <Create/> */}
        {/* <Reset /> */}
      
     <Route element= {<HomePage />} path="/"/> 
     <Route element={<Create/>} path="/Create" />
     <Route element={<Signinl/>} path="/Login" />
     <Route element={<Container/>} path="/dash" />
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
