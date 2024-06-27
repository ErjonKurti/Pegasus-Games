import React from "react";

import '../../assets/css/home_review_games.css';
import '../../assets/css/style.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ACMirage = () => {
    return (
        <body
            className="body-assassins-creed-mirage"
            style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.95)), url('img/home-reviews/mirage-background.jpg') no-repeat",
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
                            <h2>ASSASSIN'S CREED MIRAGE</h2>
                            <video className="review-video" controls>
                                <source src="img/home-reviews/mirage-video.mp4" />
                            </video>
                            <div className="row-md-2">
                                <img src="img/home-reviews/mirage-1.jpg" className="review-image-1" alt="" />
                                <img src="img/home-reviews/mirage-2.png" className="review-image-2" alt="" />
                                <img src="img/home-reviews/mirage-3.jpg" className="review-image-3" alt="" />
                                <img src="img/home-reviews/mirage-4.jpg" className="review-image-4" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info-review">
                            <img src="img/home-reviews/mirage-5.jpg" className="review-image-5" alt="" />
                            <h3>
                                $79.99 <del>$99.99</del>
                            </h3>
                            <p className="p-review-text">
                                Explore a dense and vibrant city whose inhabitants react to your every move.
                                Meet an inspiring cast of characters who will shape Basim's destiny and may be more than what they seem…
                            </p>
                            <p className="publisher-review">Action &nbsp; | &nbsp; Open World &nbsp; | &nbsp; Adventure</p>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default ACMirage;