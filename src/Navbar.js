import Logo from "./images/SealLogo2.png";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
  import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <div>
            <nav className="navbar">
                <Link to="/main">
                    <img src={Logo} height="45px" style={{ paddingTop: 2, marginLeft:"5px" }}></img>
                </Link>
                <div className="links">
                    <Link to="/main" className="link">Dashboard</Link>
                    <p className="divider">|</p>
                    <Link to="/history" className="link">Transaction History</Link>
                    <p className="divider">|</p>
                    <Link to="/thefarm" className="link">Farm</Link>
                </div>
            </nav>
            
        </div>
     );
}
 
export default Navbar;