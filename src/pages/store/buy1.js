import React from 'react';

import '../../assets/css/style.css';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/purchase.css';


const BuyPage1 = () => {
  return (
    <body className="buy-page">
      <section>
        <div className="game-purchase-image">
          <img src="img/purchase/cyberpunk-1.jpg" className="large-image" alt="Cyberpunk 2077" />
          <img src="img/purchase/cyberpunk-2.jpg" className="small-image-1" alt="Cyberpunk 2077" />
          <img src="img/purchase/cyberpunk-3.jpg" className="small-image-2" alt="Cyberpunk 2077" />
        </div>
        <div className="info">
          <h2>CYBERPUNK 2077</h2>
          <h3>$59.99 <del>$79.99 </del></h3>
          <p className="p-text">
            Immerse yourself in the Cyberpunk universe, from the original storyline of Cyberpunk 2077 and its gripping spy-thriller expansion Phantom Liberty to the award-winning anime series Cyberpunk: Edgerunners there are countless stories to discover in the deadly megalopolis of Night City, a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.
          </p>
          <p className="pdf">Torrent Download &nbsp; | &nbsp; Torrent &nbsp; | &nbsp; 70 GB</p>
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
          <a href="games-torrent/cyberpunk-77.torrent" download="cyberpunk-77.torrent">Confirm</a>
        </div>
      </section>
    </body>
  );
}

export default BuyPage1;
