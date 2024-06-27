import React from "react";

import '../../assets/css/home_review_games.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const SAbove = () => {
    return (
        <div
            className="body-"
            style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.95)), url('img/home-reviews/scars-above-background.jpg') no-repeat",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                height: '800px',
                width: '100%',
            }}
        >
        <section>
            <div className="row">
                <div className="col-md-7">
                    <div className="game-review-sector">
                        <h2>SCARS ABOVE</h2>
                        <video className="review-video" controls>
                            <source src="img/home-reviews/scars-above-video.mp4" />
                        </video>
                        <div className="row-md-2">
                            <img src="img/home-reviews/scars-above-1.jpg" className="review-image-1" alt="" />
                            <img src="img/home-reviews/scars-aboove-2.jpg" className="review-image-2" alt="" />
                            <img src="img/home-reviews/scars-above-3.jpg" className="review-image-3" alt="" />
                            <img src="img/home-reviews/scars-above-4.jpg" className="review-image-4" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-review">
                        <img src="img/home-reviews/scars-above-5.jpg" className="review-image-5" alt="" />
                        <h3>$69.99 <del>$89.99</del></h3>
                        <p className="p-review-text">
                            Immerse yourself in a carefully crafted adventure, inspired by the sci-fi classics.
                            Explore an alien world filled with countless threats, gorgeous landscapes and ruins
                            hinting of an ancient - yet advanced - civilisation that somehow disappeared.
                        </p>
                        <p className="publisher-review">SCI-FI &nbsp; | &nbsp; Action &nbsp; | &nbsp; Adventure</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default SAbove;