import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/style.css';
import '../assets/css/search.css';
import '../assets/css/send_email.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/navbar.css';

import '../assets/js/main.js'
import '../assets/js/search.js';
import '../assets/js/send_email.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Games = () => {
    //   const sendEmail = () => {
    //     // Implement your email sending logic here
    //   };

    //   const reset = () => {
    //     // Implement your form reset logic here
    //   };

    return (
        <div>
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
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="review-item">
                                <div className="review-cover set-background" style={{ position: 'relative' }}>
                                    <div style={{ backgroundImage: 'url(img/review/5.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                    <div className="score yellow">9.2</div>
                                </div>
                                <div className="review-text">
                                    <h4>Forza Horizon 4</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star empty-star"></i>
                                    </div>
                                    <p>
                                        <h5><b>System Requirements (Minimum)</b></h5>

                                        <dl>
                                            <li>OS: Windows 10 version 15063.0 or higher</li>
                                            <li>Processor: Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz</li>
                                            <li>RAM: 8 GB RAM</li>
                                            <li>Hard Drive: 30 GB available space</li>
                                            <li>Video Card: Nvidia GTX 650 Ti or Nvidia GT 740 or AMD R7 250x</li>
                                        </dl>
                                    </p>
                                    <div className="button_cont" align="center">
                                        <a className="download-button" href="games-torrent/forza-horizon-4.torrent" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                        <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/forza-horizon-4/17900" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                    </div><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="review-item">
                                <div className="review-cover set-background" style={{ position: 'relative' }}>
                                    <div style={{ backgroundImage: 'url(img/review/6.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                    <div className="score yellow">9.2</div>
                                </div>
                                <div className="review-text">
                                    <h4>Grand Theft Auto V</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star empty-star"></i>
                                    </div>
                                    <p>
                                        <h5><b>System Requirements (Minimum)</b></h5>
                                        <dl>
                                            <li>OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit</li>
                                            <li>Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs)</li>
                                            <li>RAM: 4 GB RAM</li>
                                            <li>Hard Drive: 72 GB available space</li>
                                            <li>Video Card: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB</li>
                                        </dl>
                                    </p>
                                    <div className="button_cont" align="center">
                                        <a className="download-button" href="games-torrent/gta-v.torrent" rel="nofollow noopener">Download</a>&nbsp;&nbsp;
                                        <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/grand-theft-auto-v/12455" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                    </div><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/93.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.2</div>
                                    </div>

                                    <div className="review-text">
                                        <h4>F1 2020</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows 7 64-bit, Windows 8.1 64-bit or Windows 10 64-bit</li>
                                            <li>Processor: Intel Core i3-530 @ 2.93 GHz / AMD Phenom II X4 810 @ 2.60 GHz</li>
                                            <li>RAM: 6 GB RAM</li>
                                            <li>Hard Drive: 55 GB available space</li>
                                            <li>Video Card: NVIDIA GeForce GTS 450 / AMD Radeon HD 5870</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="games-torrent/f1-2020.torrent" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/f1-2020/19800" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/94.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.3</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>F1 2021</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows 7</li>
                                            <li>Processor: Intel Core 2 Duo E4600</li>
                                            <li>RAM: 3 GB RAM</li>
                                            <li>Hard Drive: 17 GB available space</li>
                                            <li>Video Card: NVIDIA® Geforce GTS 450 / ATI Radeon HD 5770</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/3KniJQ6YQyNAp3UW6ggYsoCtWjk9FyjUUC" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/f1-2021/20784" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>

                            {/* Review Item 3 */}
                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/10.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">8.8</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>Spiderman</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows® 7/XP (SP 3)/Vista (SP 2)</li>
                                            <li>Processor: Intel Core® 2 Duo 2.6 GHz or AMD Athlon 64 X2 6000+</li>
                                            <li>RAM: 3 GB RAM</li>
                                            <li>Hard Drive: 7500 MB HD space</li>
                                            <li>Video Card: NVidia Geforce 7600GT / AMD ATI Radeon X1800 GTO</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="games-torrent/spiderman.torrent" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/the-amazing-spider-man/11423" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>

                            {/* Review Item 4 */}
                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/12.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.5</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>Call Of Duty Modern Warfare 2019</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>Windows 7 64-Bit (SP1) or Windows 10 64-Bit (1709 or later)</li>
                                            <li>Processor: Intel Core i3-4340 or AMD FX-6300</li>
                                            <li>RAM: 8 GB RAM</li>
                                            <li>Hard Drive: 175 GB space</li>
                                            <li>Video Card: NVIDIA GeForce GTX 670 / NVIDIA GeForce GTX 1650 or AMD Radeon HD 7950</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/3KniJQ6YQyNAp3UW6ggYsoCtWjk9FyjUUC" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/call-of-duty-modern-warfare/18809" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>

                            {/* Review Item 5 */}
                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/13.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.0</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>Call Of Duty BlackOps 1</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows® Vista / XP / 7</li>
                                            <li>Processor: Intel® Core™2 Duo E6600 or AMD Phenom™ X3 8750 or more better</li>
                                            <li>RAM: 2 GB RAM</li>
                                            <li>Hard Drive: 12 GB space</li>
                                            <li>Video Card: NVIDIA® GeForce® 8600GT / ATI Radeon® X1950Pro or more better</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/3KniJQ6YQyNAp3UW6ggYsoCtWjk9FyjUUC" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/call-of-duty-black-ops/11051" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>

                            {/* Review Item 6 */}
                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/14.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.1</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>Call Of Duty BlackOps 2</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows Vista / XP / 7</li>
                                            <li>Processor: Intel Core 2 Duo E6600</li>
                                            <li>RAM: 2 GB RAM</li>
                                            <li>Hard Drive: 16 GB available space</li>
                                            <li>Video Card: Nvidia Geforce 8600GT / ATI Radeon X1950Pro</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/3KniJQ6YQyNAp3UW6ggYsoCtWjk9FyjUUC" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/call-of-duty-black-o/11439" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            {/* games to add */}

                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/15.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.0</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>FarCry 3</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows 7 64 Bit</li>
                                            <li>Processor: Intel Core2 Duo E6700/AMD Athlon64 X2 6000+</li>
                                            <li>RAM: 2 GB RAM</li>
                                            <li>Hard Drive: 7 GB space</li>
                                            <li>Video Card: Nvidia 8800 GTX/AMD Radeon HD 2900 or equivalent 512MB DirectX 9c card</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/a9054dea3804aa0a4c6269e974f75e26" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/detect/?ref-id=1046&next=/cyri/requirements/far-cry-3/11465" target="_blank" rel="nofollow noopener noreferrer">Compare PC</a>
                                        </div>

                                        <br />
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/16.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.2</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>FarCry 4</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows 10</li>
                                            <li>Processor: Intel Core i5-750 @2.6 GHz or AMD Phenom II X4955 @3.2 GHz</li>
                                            <li>RAM: 4 GB RAM</li>
                                            <li>Hard Drive: 27 GB available space</li>
                                            <li>Video Card: NVIDIA GeForce GTX 460 or AMD Radeon HD5850 (1GB VRAM)</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/6ea74a1b05fb9562ca81f97fcdc74c4c" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/far-cry-4/12380" target="_blank" rel="nofollow noopener noreferrer">Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>




                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/17.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.4</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>FarCry 5</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows 10</li>
                                            <li>Processor: Intel Core i5-2400 | AMD FX-6300 @ 3.5 GHz or better</li>
                                            <li>RAM: 8 GB RAM</li>
                                            <li>Hard Drive: 77 GB available space</li>
                                            <li>Video Card: NVIDIA GeForce GTX 670 | AMD R9 270</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/3KniJQ6YQyNAp3UW6ggYsoCtWjk9FyjUUC" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/far-cry-5/15464" target="_blank" rel="nofollow noopener noreferrer">Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>




                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/18.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">8.9</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>PES 2019</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows 10</li>
                                            <li>Processor: Intel Core i5-3470 3.2 GHz or AMD FX-4350 4.2GHz</li>
                                            <li>RAM: 8 GB RAM</li>
                                            <li>Hard Drive: 27 GB available space</li>
                                            <li>Video Card: NVIDIA GeForce GTX 670 or Radeon HD 7870</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/3KniJQ6YQyNAp3UW6ggYsoCtWjk9FyjUUC" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/pro-evolution-soccer-2019/17969" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>





                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/95.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.1</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>PES 2020</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows 10</li>
                                            <li>Processor: Intel Core i5-3470 / AMD FX 4350</li>
                                            <li>RAM: 4 GB RAM</li>
                                            <li>Hard Drive: 40 GB available space</li>
                                            <li>Video Card: NVIDIA GTX 670 / AMD Radeon HD 7870</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/3KniJQ6YQyNAp3UW6ggYsoCtWjk9FyjUUC" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/efootball-pes-2020/18941" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>





                            <div className="col-md-6">
                                <div className="review-item">
                                    <div className="review-cover set-background" style={{ position: 'relative' }}>
                                        <div style={{ backgroundImage: 'url(img/review/36.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                        <div className="score yellow">9.2</div>
                                    </div>
                                    <div className="review-text">
                                        <h4>PES 2021</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star empty-star"></i>
                                        </div>
                                        <p>
                                            <h5><b>System Requirements (Minimum)</b></h5>
                                            <li>OS: Windows 10</li>
                                            <li>Processor: Intel Core i5-3470 / AMD FX 4350</li>
                                            <li>RAM: 8 GB RAM</li>
                                            <li>Hard Drive: 40 GB available space</li>
                                            <li>Video Card: NVIDIA GTX 670 / AMD Radeon HD 7870</li>
                                        </p>
                                        <div className="button_cont" align="center">
                                            <a className="download-button" href="https://uploadhaven.com/download/3KniJQ6YQyNAp3UW6ggYsoCtWjk9FyjUUC" target="_blank" rel="nofollow noopener noreferrer">Download</a>&nbsp;&nbsp;
                                            <a className="download-button" href="https://www.systemrequirementslab.com/cyri/requirements/efootball-pes-2021/20261" target="_blank" rel="nofollow noopener noreferrer" >Compare PC</a>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="pagepage position text-center" role="navigation">
                    <Link to="/games.js" className="last" aria-label="First Page">«First </Link>
                    <Link to="/games.js" className="nextpostslink" rel="next" aria-label="Previous Page">«</Link>
                    <span className="extend">...</span>
                    <span aria-current="page" className="current">1</span>
                    <Link to="/gamesp2.js" className="page larger" title="Page 2">2</Link>
                    <Link to="/gamesp3.js" className="page larger" title="Page 3">3</Link>
                    <Link to="/gamesp4.js" className="page larger" title="Page 4">4</Link>
                    <Link to="/gamesp5.js" className="page larger" title="Page 5">5</Link>
                    <span className="extend">...</span>
                    <Link to="/gamesp2.js" className="nextpostslink" rel="next" aria-label="Next Page">»</Link>
                    <Link to="/gamesp7.js" className="last" aria-label="Last Page">End»</Link>
                </div>
            </section>

        </div>
    );
};

export default Games;
