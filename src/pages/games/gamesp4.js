import React from 'react'
import { Link } from 'react-router-dom';

import '../../assets/css/style.css';
import '../../assets/css/search.css';
import '../../assets/css/send_email.css';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/navbar.css';

import '../../assets/js/main.js'
import '../../assets/js/search.js';
import '../../assets/js/send_email.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gamesp4 = () => {
    return (
        <>

<section className="image-with-text">
                <div className="image-container">
                    <img className="set-background" src="img/slider-1.jpg" alt="Background" />
                    <div className="text-overlay-games">
                        <h1>Elevate your gaming experience</h1>
                        <p>If you don't have qBittorrent installed, you can download it here:</p>
                        
                        <a href="qbittorrent/qbittorrent-macos.dmg" rel="noopener noreferrer" className="download-link">
                            <button className="FDM-button">
                                <span className="macos-icon"></span> qBittorrent - MacOS®
                            </button>
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href="qbittorrent/qbittorrent-windows.exe" rel="noopener noreferrer" className="download-link">
                            <button className="FDM-button">
                                <span className="windows-icon"></span> qBittorrent - Windows®
                            </button>
                        </a>    
                    </div>
                </div>
            </section>

            <section className="page-section review-page space-between-sections">

            </section>

            <section>
                <div className="pagepage position text-center" role="navigation">
                    <Link to="/games.js" className="last" aria-label="First Page">«First </Link>
                    <Link to="/gamesp3.js" className="nextpostslink" rel="next" aria-label="Previous Page">«</Link>
                    <span className="extend">...</span>
                    <Link to="/gamesp2.js" className="page larger" title="Page 2">2</Link>
                    <Link to="/gamesp3.js" className="page larger" title="Page 3">3</Link>
                    <span aria-current="page" className="current">4</span>
                    <Link to="/gamesp5.js" className="page larger" title="Page 4">5</Link>
                    <Link to="/gamesp6.js" className="page larger" title="Page 6">6</Link>
                    <span className="extend">...</span>
                    <Link to="/gamesp5.js" className="nextpostslink" rel="next" aria-label="Next Page">»</Link>
                    <Link to="/gamesp7.js" className="last" aria-label="Last Page">End»</Link>
                </div>
            </section>

        </>
    )
}

export default Gamesp4