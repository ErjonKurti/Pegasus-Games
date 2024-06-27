import React from 'react';
import '../assets/css/style.css';
import '../assets/css/search.css';
import '../assets/css/send_email.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/navbar.css';

import '../assets/js/main.js';
import '../assets/js/search.js';
import '../assets/js/send_email.js';

import 'bootstrap/dist/css/bootstrap.css';

const AboutUs = () => {

  const sectionStyle = {
    backgroundImage: 'url(/img/background.jpg)', // Use the public URL
    backgroundSize: 'cover', // Ensures the image covers the entire section
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    width: '100vw', // Full width
    height: '100vh', // Full height
    display: 'flex', // Optional: To center content inside
    justifyContent: 'center', // Optional: To center content horizontally
    alignItems: 'center', // Optional: To center content vertically
  };

  return (
    <>
       <section className="image-with-text">
                <div className="image-container">
                    <img className="set-background" src="img/slider-2.jpg" alt="Background"  style={sectionStyle} />
                    <div className="text-overlay-games">
                        <h1>Master your gaming world</h1>
                        <p>If you don't have followed us yet, you can contact us here:</p>
                        
                        <a href="https://www.instagram.com/pegasusgamesal/" rel="noopener noreferrer" className="download-link">
                            <button className="FDM-button">
                                <span className="instagram-icon"></span> Pegasus Games - Instagram®
                            </button>
                        </a>
                        <br></br>

                        <a href="https://www.linkedin.com/in/pegasus-games/" rel="noopener noreferrer" className="download-link">
                            <button className="FDM-button">
                                <span className="linkedin-icon"></span> Pegasus Games - linkedin®
                            </button>
                        </a>    
                    </div>
                </div>
            </section>

      <section className="space-between-sections contact-page" style={{ maxWidth: '2000px', height: '300px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="comment-title">Contact Us</h2><br />
                  <p>For any information you need, you can contact the phone number or email address</p>
                  <ul className="contact-info-list">
                    <li>
                      <div className="cf-left">Address</div>
                      <div className="cf-right">Tirana, Albania</div>
                    </li>
                    <li>
                      <div className="cf-left">Phone</div>
                      <div className="cf-right">+355 69 58 28 931</div>
                    </li>
                    <li>
                      <div className="cf-left">E-mail</div>
                      <div className="cf-right">pegasusgames.info@gmail.com</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="flex-center">
                    <a href="https://www.instagram.com/pegasusgamesal/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-4x icon-3d"></i></a>
                    <a href="https://www.youtube.com/@pegasusgamesal" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play fa-4x icon-3d"></i></a>
                    <a href="https://www.linkedin.com/in/pegasus-games/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-4x icon-3d"></i></a>
                    <a href="https://www.paypal.me/pegasus" target="_blank" rel="noopener noreferrer"><i className="fa fa-paypal fa-4x icon-3d"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us-section space-between-sections set-background" style={{ position: 'relative', maxWidth: '2000px', height: '450px' }}>
        <div style={{ backgroundImage: 'url(/img/about-us/about_us.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
        <h1>ABOUT US</h1>
        <h2>Enrich players' lives by creating memorable and <br /> meaningful gaming experiences</h2>
      </section>


      <section className="frequently-asked-questions-section space-between-sections set-background" style={{ position: 'relative', maxWidth: '1920px', height: '970px' }}>
        <div style={{ backgroundImage: 'url(/img/about-us/frequently_asked_questions.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
        <h1>FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
        <h2>Greetings to all our gaming community! Hello Guys, we hope you have found the game you <br />
          were searching for and now you are playing it, but if you have encountered some error <br />
          during downloading, installation or gameplay, we will try our best to resolve it. <br /></h2>
        <div className="faqs-container">
          <h6>1. How can I Download the games?</h6>
          <p><span className="p-span">Ans. </span>We have made a very simple download process for our gaming community, so
            everyone can Download Games easily, but if you are still struggling with the <br /> Download Process,
            Please
            Check out our, How to Download Video.</p>
          <h6>2. Why I can't download multiple files at the same time?</h6>
          <p><span className="p-span">Ans. </span>We don't allow multiple downloads at the same time for better download
            speed, reliability, and server maintenance.</p>
          <h6>3. My WinRAR keep showing corrupt error while extracting the game?</h6>
          <p><span className="p-span">Ans. </span>It mostly occurs because you're using an old version or some new version
            of WinRAR which is not compatible with our WinRAR file <br /> version. Please use Winrar 5.01 for the best
            and
            smooth extraction without any errors.</p>
          <h6>4. When I install the game my anti-virus or anti-malware program pops-up and shows the game file as a
            virus. <br /> Does your game has a virus?</h6>
          <p><span className="p-span">Ans. </span>All anti-virus programs get paid to stop crack games, so when anti-virus
            detects cracked game or cracked game setup, <br /> it deletes the crack file or abort setup before the
            installation
            process ends.</p>
          <h6>5. Why can I not save the game?</h6>
          <p><span className="p-span">Ans. </span>It usually not saving because you don't have administrator privilege,
            in-order to save game you need to run game <br /> as administrator.</p>
          <h6>6. Why I'm getting errors like (Runtime Errors or Missing MSVCR100 or 110.dll etc..) also more like <br />
            (Missing dll d3dx3_code or XINput.dll errors) (0xc00007b error). How can I fix these?</h6>
          <p><span className="p-span">Ans. </span>None of these errors or other errors will going to occur, if you have
            these softwares installed in your PC.
            DirectX 9 - DirectX 11 - Graphic Drivers <br /> - Microsoft Visual C++ - .NET Framework
            These software are not installed during the window installation process. So you have to install these
            <br />
            software manually, It will allow you to run any game without errors.</p>
        </div>
      </section>

      <section className="how-to-download-section space-between-sections set-background" style={{ position: 'relative', maxWidth: '2000px', height: '450px' }}>
        <div style={{ backgroundImage: 'url(/img/about-us/how_to_download_photo.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
        <h1>HOW TO DOWNLOAD?</h1>
        <h2>Watch the video below</h2>
      </section>

      <section className="how-to-download-section-2 space-between-sections set-background" style={{ position: 'relative', maxWidth: '1920px', height: '800px' }}>
        <div style={{ backgroundImage: 'url(/img/about-us/god_of_war.jpg)', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
        <div className="how-to-download-container">
          <video controls>
            <source src="/img/about-us/how-to-download.mp4" type="video/mp4" />
          </video>
          <h6>How to download the games from us?</h6>
          <p>1. Go to the games page of website in the navbar. Find the game you want to download.<br />
            2. Click on the black Download button to download the torrent file.<br />
            3. You should have a platform for torrent files such as Fast Download Manager or UTorrent.<br />
            4. Drag and drop the torrent file you download from us into the Fast Download Manager.<br />
            5. Click on Download button and then just wait for it to be downloaded.<br />
            6. For the extract use WinRar. Then click on the .exe file and enjoy your game.</p>
        </div>
      </section>

    </>
  );
}

export default AboutUs;
