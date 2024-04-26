import React from 'react';
import './App.css'; // Import the CSS file
import landing from './landing-img.jpg';
import logo from './logo.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import prices from './assets/components/prices';

const App = () => {
  const handleToggleMenu = () => {
    const topnav = document.getElementById('myTopnav');
    topnav.classList.toggle('responsive');
  };

  return (
    <div>
      <div className="topnav" id="myTopnav">
        <div className="logo"> <img src={logo} alt="logo-pic" /> </div>
        <div className="nav">
        <a href="#home" className="active">  Home </a>
          <a href="#news">Management</a>
          <a href="#prices">Pricing<prices/></a>
          <a href="#about">About us</a>
          <button className="signup">Sign Up</button>
          <a href="javascript:void(0);" className="icon" onClick={handleToggleMenu}><i className="fa fa-bars"></i> </a>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div style={{ paddingLeft: '16px' }}>
          <b> <h1> SEDI's  LOUNGE</h1></b>
            <p>At SEDI's we are here to offer you with the<br></br> best accommodation worldwide.</p>
            <h2>To Discover our best amazing products and services!, </h2>
            <br />
            <button className="getstarted">Get started</button>
          </div>
        </div>

        <div className="column">
          <img src={landing} alt="pic" />
        </div>
      </div>
  
    <div className="rates" >
      
      <a href=""> 
      <p>   2<br></br> years of experience &nbsp;</p> </a>
      <a href=""> <p>
       12<br></br> Awards Gained &nbsp;</p> </a>
      <a href="">
      <p>
      10+<br></br> Our Properties</p> </a> 
     
 
    </div>
    
      <footer className= "foot">
      <div className="Socials" >
      <a href="https://www.facebook.com">
        <FaFacebook />
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com">
        <FaInstagram />
      </a>
    </div> <p>@Phoshoko RR (2023)</p>
      </footer>
    </div>
  );
};

export default App;
