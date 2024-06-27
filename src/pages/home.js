import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Import your CSS files here
import '../assets/css/style.css';
import '../assets/css/animate_videos.css';
import '../assets/css/search.css';
import '../assets/css/send_email.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/home_review_games.css';
import '../assets/css/navbar.css';
import '../assets/css/pages.css';
import '../assets/css/purchase.css';

// Import your JavaScript files here
import '../assets/js/main.js';
import '../assets/js/animate_videos.js';
import '../assets/js/search.js';
import '../assets/js/send_email.js';

// Bootstrap CSS import
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// Functional component for Home
const Home = () => {
  // Ref for video element
  const videoRef = useRef(null);
  // State for play/pause toggle
  const [isPlaying, setIsPlaying] = useState(true);

  // Function to toggle play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Click handler for video play/pause
  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <div>
      {/* Video section */}
      <section>
        <div>
          <video
            ref={videoRef}
            style={{ height: '100vh', width: '100%', backgroundColor: 'black', padding: 0, margin: 0 }}
            src={"video/NFS.mp4"}
            autoPlay
            loop
            id="NFS"
            onClick={handleVideoClick}
          ></video>
          
          <div className="text-overlay">
            <h2>Discover and Download Your Favorite Games</h2>
            <h1>Unlock Your Gaming Potential</h1>
            <p>If you don't have Free Download Manager installed, you can download it here:</p>

            <a href="fdm/fdm-macOS.dmg" rel="noopener noreferrer" className="download-link">
              <button className="FDM-button">
                <span className="macos-icon"></span> FDM - MacOS®
              </button>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a href="fdm/fdm-windows.exe" rel="noopener noreferrer" className="download-link">
              <button className="FDM-button">
                <span className="windows-icon"></span> FDM - Windows®
              </button>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a href="fdm/fdm-linux.deb" rel="noopener noreferrer" className="download-link">
              <button className="FDM-button">
                <span className="linux-icon"></span> FDM - Linux®
              </button>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


          </div>
          {/* <div className="play-button">
            <div className="arrow arrow-left"></div>
            <div className="arrow arrow-right"></div>
          </div> */}
        </div>
      </section>

      {/* Recent games section */}
      <section className="recent-game-section space-between-sections set-background" data-setbg="img/recent-game-bg.png">
        <div className="container">
          <div className="section-title">
            <div className="category new">new</div>
            <h2>Recent Games</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="recent-game-item">
                <div className="rgi-thumb set-background" data-setbg="img/recent-games/1.jpg">
                  <div className="category adventure">Adventure</div>
                </div>
                <div className="rgi-content">
                  <h5>Assassin's Creed Mirage</h5>
                  <p>Assassin's Creed Mirage is an upcoming action-adventure game developed by Ubisoft
                    Bordeaux and published by Ubisoft. It will be the thirteenth major installment in
                    the Assassin's Creed series and the successor to 2020's Assassin's Creed Valhalla.</p>
                  <Link to="/ac_mirage" target="_blank">
                    <p>Click For More...</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="recent-game-item">
                <div className="rgi-thumb set-background" data-setbg="img/recent-games/2.jpg">
                  <div className="category adventure">Adventure</div>
                </div>
                <div className="rgi-content">
                  <h5>Scars Above</h5>
                  <p> Scars Above is a challenging sci-fi third-person action adventure shooter combining
                    the rewarding feel of overcoming difficulty with a compelling and intricate story,
                    set in a mysterious alien world to explore. </p><br />
                  <Link to="/scars_above.js" target="_blank">
                    <p>Click For More...</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="recent-game-item">
                <div className="rgi-thumb set-background" data-setbg="img/recent-games/3.jpg">
                  <div className="category adventure">Adventure</div>
                </div>
                <div className="rgi-content">
                  <h5>Wild Hearts</h5>
                  <p>Wild Hearts is an action role-playing video game developed by Omega Force and published by
                    Electronic Arts under its EA Originals label. The game tasks the player to hunt massive
                    monsters in Azuma, a fantasy world inspired by feudal Japan. </p>
                  <Link to="/wild_hearts.js" target="_blank">
                    <p>Click For More...</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Can I run it section */}
      <section className="can-i-run-it-section space-between-sections">
        <div className="container">
          <div className="detection-container">
            <h2>Can You Run It?</h2>
            <p>Here you can download the file Detection.exe to see if your PC meets the
              requirements to run the game properly.</p>
            <a href="detection/Detection.exe" download="detection.exe">Download</a>
            <a href="https://www.systemrequirementslab.com/game-lists" target="_blank" rel="noreferrer">What can you run?</a>
          </div>
        </div>
      </section>

      {/* Review section */}
      <section className="review-section space-between-sections set-background" data-setbg="img/review-bg.png">
        <div className="container">
          <div className="section-title">
            <div className="category new">new</div>
            <h2>2024 Reviews</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="review-item">
                <div className="review-cover">
                  <img className="review-cover" src="img/2024-reviews/1.jpg" alt="Review Cover" />
                  <div className="score yellow">9.8</div>
                </div>
                <div className="review-text">
                  <h5>COD Modern Warfare 2022</h5>
                  <p>Call of Duty: Modern Warfare II is a 2022 first-person shooter game developed by Infinity
                    Ward. It is a sequel to the 2019 reboot, and serves as the nineteenth installment in the overall
                    Call of Duty series</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="review-item">
                <div className="review-cover">
                  <img className="review-cover set-background" src="img/2024-reviews/2.jpg" alt="Review Cover" />
                  <div className="score purple">9.8</div>
                </div>
                <div className="review-text">
                  <h5>God of War Ragnarök</h5>
                  <p>God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published. It
                    was released worldwide on November 9, 2022, for the PlayStation 4 and PlayStation 5.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="review-item">
                <div className="review-cover">
                  <img className="review-cover set-background" src="img/2024-reviews/3.jpg" alt="Review Cover" />
                  <div className="score green">9.7</div>
                </div>
                <div className="review-text">
                  <h5>Assassin's Creed Valhalla</h5>
                  <p>Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal.
                    It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's
                    Creed Odyssey.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="review-item">
                <div className="review-cover set-background">
                  <img className="review-cover" src="/img/2024-reviews/4.jpg" alt="Review Cover" />
                  <div className="score pink">9.7</div>
                </div>
                <div className="review-text">
                  <h5>Wild Hearts</h5>
                  <p>The game tasks the player to hunt massive monsters in Azuma, a fantasy world inspired by
                    feudal Japan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
