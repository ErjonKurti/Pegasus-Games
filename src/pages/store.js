import React from 'react';
import { Link } from 'react-router-dom';

const Store = () => {
    // Define any necessary JavaScript functions here

    return (
        <div>
            <section className="image-with-text">
                <div className="image-container">
                    <img className="set-background" src="img/slider-3.jpg" alt="Background" />
                    <div className="text-overlay-games">
                        <h1>Conquer the gaming realm</h1>
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="review-item">
                                <div className="review-cover set-background" style={{ position: 'relative' }}>
                                    <div style={{ backgroundImage: 'url(img/store/cyberpunk.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                    <div className="score yellow">9.7</div>
                                </div>
                                <div className="review-text">
                                    <h4>Cyberpunk 2077</h4>
                                    <div className="rating">
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa fa-star"></i>
                                        ))}
                                    </div>
                                    <p>
                                        <h5><b>System Requirements (Minimum)</b></h5>
                                        <dl>
                                            <li>OS: Windows® 7/XP (SP 3)/Vista (SP 2)</li>
                                            <li>Processor: Intel Core i5-4670K 3.4GHz / AMD Ryzen R5 1600</li>
                                            <li>RAM: 16 GB RAM</li>
                                            <li>Hard Drive: 70 GB space</li>
                                            <li>Video Card: AMD Radeon RX Vega 64 8GB or NVIDIA GeForce GTX 1070</li>
                                        </dl>
                                    </p>
                                    <div className="button_cont" align="center">
                                        <Link to="/buy1.js" target="_blank" rel="nofollow noopener">
                                            <p className="download-button">Purchase</p>
                                        </Link>
                                    </div><br />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="review-item">
                                <div className="review-cover set-background" style={{ position: 'relative' }}>
                                    <div style={{ backgroundImage: 'url(img/store/valhalla.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                    <div className="score yellow">9.7</div>
                                </div>
                                <div className="review-text">
                                    <h4>Assassin's Creed Valhalla</h4>
                                    <div className="rating">
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa fa-star"></i>
                                        ))}
                                    </div>
                                    <p>
                                        <h5><b>System Requirements (Minimum)</b></h5>
                                        <dl>
                                            <li>OS: Windows 10 (64-bit versions only)</li>
                                            <li>Processor: Intel Core i5 4590 / AMD FX 8350</li>
                                            <li>RAM: 8 GB RAM</li>
                                            <li>Hard Drive: Up to 100 GB available space</li>
                                            <li>Video Card: AMD Radeon R9 290 / NVIDIA GeForce GTX 960</li>
                                        </dl>
                                    </p>
                                    <div className="button_cont" align="center">
                                        <Link to="/buy2.js" target="_blank" rel="nofollow noopener">
                                            <p className="download-button">Purchase</p>
                                        </Link>
                                    </div><br />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="review-item">
                                <div className="review-cover set-background" style={{ position: 'relative' }}>
                                    <div style={{ backgroundImage: 'url(img/store/codmw.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                    <div className="score yellow">9.7</div>
                                </div>
                                <div className="review-text">
                                    <h4>Call Of Duty Modern Warfare 2022</h4>
                                    <div className="rating">
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa fa-star"></i>
                                        ))}
                                    </div>
                                    <p>
                                        <h5><b>System Requirements (Minimum)</b></h5>
                                        <dl>
                                            <li>OS: Windows 10 (64-bit versions only)</li>
                                            <li>Processor: Intel Core I3-6100 or AMD Ryzen 3 1200</li>
                                            <li>RAM: 8 GB RAM</li>
                                            <li>Hard Drive: 75 GB space</li>
                                            <li>Video Card: Nvidia GeForce GTX 960 or AMD Radeon RX 470, 2GB</li>
                                        </dl>
                                    </p>
                                    <div className="button_cont" align="center">
                                        <a className="download-button" href="https://uploadhaven.com/download/8e50959dc0f4003509c707c351bb1011" target="_blank" rel="nofollow noopener noreferrer">Purchase</a>
                                    </div><br />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="review-item">
                                <div className="review-cover set-background" style={{ position: 'relative' }}>
                                    <div style={{ backgroundImage: 'url(img/store/diablo.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                    <div className="score yellow">9.6</div>
                                </div>
                                <div className="review-text">
                                    <h4>Diablo IV</h4>
                                    <div className="rating">
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa fa-star"></i>
                                        ))}
                                    </div>
                                    <p>
                                        <h5><b>System Requirements (Minimum)</b></h5>
                                        <dl>
                                            <li>OS: Windows 10 (64-bit versions only)</li>
                                            <li>Processor: Intel Core i5 2500K or AMD FX 8100</li>
                                            <li>RAM: 8 GB RAM</li>
                                            <li>Hard Drive: 90 GB space</li>
                                            <li>Video Card: NVIDIA® GeForce® GTX 660 or Intel® Arc™ A380</li>
                                        </dl>
                                    </p>
                                    <div className="button_cont" align="center">
                                        <a className="download-button" href="https://uploadhaven.com/download/8e50959dc0f4003509c707c351bb1011" target="_blank" rel="nofollow noopener noreferrer">Purchase</a>
                                    </div><br />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="review-item">
                                <div className="review-cover set-background" style={{ position: 'relative' }}>
                                    <div style={{ backgroundImage: 'url(img/store/elden-ring.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                    <div className="score yellow">9.6</div>
                                </div>
                                <div className="review-text">
                                    <h4>Elden Ring</h4>
                                    <div className="rating">
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa fa-star"></i>
                                        ))}
                                    </div>
                                    <p>
                                        <h5><b>System Requirements (Minimum)</b></h5>
                                        <dl>
                                            <li>OS: Windows 10 (64-bit versions only)</li>
                                            <li>Processor: Intel Core i5-8400 | AMD Ryzen 3 3300X</li>
                                            <li>RAM: 12 GB</li>
                                            <li>Hard Drive: 60 GB space</li>
                                            <li>Video Card: Nvidia GeForce GTX 1060, 3GB | AMD Radeon RX 580, 4GB</li>
                                        </dl>
                                    </p>
                                    <div className="button_cont" align="center">
                                        <a className="download-button" href="https://uploadhaven.com/download/a9ed494db2df8be15e517494a0c609c4" target="_blank" rel="nofollow noopener noreferrer">Purchase</a>
                                    </div><br />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="review-item">
                                <div className="review-cover set-background" style={{ position: 'relative' }}>
                                    <div style={{ backgroundImage: 'url(img/store/thewitcher.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
                                    <div className="score yellow">9.6</div>
                                </div>
                                <div className="review-text">
                                    <h4>The Witcher III</h4>
                                    <div className="rating">
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa fa-star"></i>
                                        ))}
                                    </div>
                                    <p>
                                        <h5><b>System Requirements (Minimum)</b></h5>
                                        <dl>
                                            <li>OS: Windows 10 (64-bit versions only)</li>
                                            <li>Processor: Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940</li>
                                            <li>RAM: 6 GB</li>
                                            <li>Hard Drive: 35 GB space</li>
                                            <li>Video Card: Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870</li>
                                        </dl>
                                    </p>
                                    <div className="button_cont" align="center">
                                        <a className="download-button" href="https://uploadhaven.com/download/a9ed494db2df8be15e517494a0c609c4" target="_blank" rel="nofollow noopener noreferrer">Purchase</a>
                                    </div><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Store;
