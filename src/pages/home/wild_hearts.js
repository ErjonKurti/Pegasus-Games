import React from "react";


import '../../assets/css/home_review_games.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const WHearts = () => {
    return (
        <div
            className="body-wild-hearts"
            style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.95)), url('img/home-reviews/wild-hearts-background.jpg') no-repeat",
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
                            <h2>WILD HEARTS</h2>
                            <video className="review-video" controls>
                                <source src="img/home-reviews/wildhearts-video.mp4" />
                            </video>
                            <div className="row-md-2">
                                <img src="img/home-reviews/wild-hearts-1.jpg" className="review-image-1" alt="" />
                                <img src="img/home-reviews/wild-hearts-2.jpg" className="review-image-2" alt="" />
                                <img src="img/home-reviews/wild-hearts-3.jpg" className="review-image-3" alt="" />
                                <img src="img/home-reviews/wild-hearts-4.jpg" className="review-image-4" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info-review">
                            <img src="img/home-reviews/wild-hearts-5.jpg" className="review-image-5" alt="" />
                            <h3>$59.99 <del>$79.99</del></h3>
                            <p className="p-review-text">
                                Explore a dense and vibrant city whose inhabitants react to your every move.
                                Meet an inspiring cast of characters who will shape Basim's
                                destiny and may be more than what they seem…
                            </p>
                            <p className="publisher-review">Action &nbsp; | &nbsp; Open World &nbsp; | &nbsp; Adventure</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WHearts;