import React from 'react';

import '../../assets/css/style.css';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/purchase.css';


const BuyPage2 = () => {
    return (

        <body className="buy-page">
            <section>
                <div className="game-purchase-image">
                    <img src="img/purchase/valhalla-1.jpg" className="large-image" alt="Assassin's Creed Valhalla" />
                    <img src="img/purchase/valhalla-2.jpg" className="small-image-1" alt="Assassin's Creed Valhalla" />
                    <img src="img/purchase/valhalla-3.jpg" className="small-image-2" alt="Assassin's Creed Valhalla" />
                </div>
                <div className="info">
                    <h2>ASSASSIN'S CREED VALHALLA</h2>
                    <h3>$69.99 <del>$99.99 </del></h3>
                    <p className="p-text">
                        Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from icy desolation in Norway to a new home amid the lush farmlands of ninth-century England. Find your settlement and conquer this hostile land by any means to earn a place in Valhalla.
                        England in the age of the Vikings is a fractured nation of petty lords and warring kingdoms. Beneath the chaos lies a rich and untamed land waiting for a new conqueror. Will it be you?
                    </p>
                    <p className="pdf">Direct Download &nbsp; | &nbsp; Zip &nbsp; | &nbsp; 152 GB</p>
                </div>
                <div className="store-payment">
                    <h4>Confirm Your Payment</h4>
                    <div className="first-row">
                        <div className="owner">
                            <h6>Owner</h6>
                            <div className="input-field">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="cvv">
                            <h6>CVV</h6>
                            <div className="input-field">
                                <input type="password" />
                            </div>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="card-number">
                            <h6>Card Number</h6>
                            <div className="input-field">
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="third-row">
                        <h6>Card Number</h6>
                        <div className="selection">
                            <div className="date">
                                <select name="months" id="months">
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                    <option value="May">May</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Aug">Aug</option>
                                    <option value="Sep">Sep</option>
                                    <option value="Oct">Oct</option>
                                    <option value="Nov">Nov</option>
                                    <option value="Dec">Dec</option>
                                </select>
                                <select name="years" id="years">
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>
                            </div>
                            <div className="cards">
                                <img src="/img/store/mastercard.png" alt="Mastercard" />
                                <img src="/img/store/visa.png" alt="Visa" />
                                <img src="/img/store/paypal.png" alt="Paypal" />
                            </div>
                        </div>
                    </div>
                    <a href="https://uploadhaven.com/download/b730b26cb85231f06feac789408bc8cb">Confirm</a>
                </div>
            </section>
        </body>
    );
}

export default BuyPage2;
