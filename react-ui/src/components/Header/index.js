import React from 'react';
import { Link } from 'react-router-dom';
import './../style.css';
import logo from './../../img/logoedit.svg';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-default" id="navigation-purple">
        <div className="container">
          <img className="img-responsive avatar" src={logo} alt="Avatar" />
          <div className="navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href={"/login"}>Register</a></li>
              {/* <li><a href="#">refresh token?</a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;