// HomePage.js
import React from 'react';
import Seal from "./images/SealLogo.jpg";
import { Link } from 'react-router-dom';
import Pig from "./images/pig.png";
import Cow from "./images/cow.png";
import Chicken from "./images/chicken.png";
import Sheep from "./images/sheep.png";
import Horse from "./images/horse.png";
import Money from "./images/money.png";
import SealLogo from './images/sealmoney.png';

const HomePage = () => {
  return (
    <div className="twocolours">
      <div className="greenblock">
      <h1 className="cashfarmtitle">Welcome to...</h1>
        <h1 className="cashfarmtitle">Cash Farm!</h1>
        <div className="row1">
          <div><img src={Pig} style={{ position: 'absolute', width: 119, height: 115, left: 65, top: 274 }} /></div>
          <div><img src={Cow} style={{ position: 'absolute', width: 119, height: 115, left: 212, top: 274 }} /></div>
          <div><img src={Chicken} style={{ position: 'absolute', width: 119, height: 115, left: 358, top: 274 }} /></div>
        </div>
        <div className="row2">
          <div><img src={Sheep} style={{ position: 'absolute', width: 119, height: 115, left: 65, top: 458 }} /></div>
          <div><img src={Horse} style={{ position: 'absolute', width: 119, height: 115, left: 212, top: 458 }} /></div>
          <div><img src={Money} style={{ position: 'absolute', width: 119, height: 115, left: 358, top: 458 }} /></div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
        <div className = "homepageblock">
        <h1 className="slogancute">Keep track of your finances with the help of cute animals</h1>
          <Link to="/login">
          <button className = "loginbutton">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className = "signupbutton">
            Sign Up
          </button>
        </Link>
        <img src={SealLogo} style={{ position: 'absolute', width:'184px', height: '205px', left:'920px',top:'400px' }} alt="Seal Logo" />
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
