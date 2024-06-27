import React from "react";

import '../assets/css/style.css';
import '../assets/css/search.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/navbar.css';

import '../assets/js/main.js';
import '../assets/js/search.js';
import '../assets/js/send_email.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}>
                <div className="container">
                    <div className="logo">
                        <img src="img/logo.png" width="105" height="45" alt="Pegasus Games Logo" />
                    </div>
                    <a className="navbar-brand" href="img/logo.png">Pegasus Games</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="home.js">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="games.js">Games</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="store.js">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about_us.js">About Us</a>
                        </li>
                    </ul>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;
                    <div className="search">
                        <input type="text" id="searchInput" placeholder="Search..." />
                    </div>
                    <div className="social-links">
                        <a href="https://www.instagram.com/pegasusgamesal/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/pegasus-games/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a href="https://www.youtube.com/@pegasusgamesal" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
                    </div>
                </div>
            </nav>
      </div>
    );
  };
  

export default Navbar;