import React from "react";

import '../assets/css/style.css';
import '../assets/css/send_email.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/send_email.css';

import '../assets/js/send_email.js';
import '../assets/js/main.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return(
        <div>
            <section className="footer-top-section">
                <div className="container">
                    <div className="footer-top-bg">
                        <img src="img/footer-top-bg.png" width="420" height="710" alt="Footer Top Background" />
                    </div>
                    <div className="row">
                        <div className="form-container">
                            <form onSubmit={(e) => { e.preventDefault(); /* Add sendEmail function */ }}>
                                <input type="hidden" name="access_key" value="bc42af93-0cf5-492f-bf23-f91c83c0fab1" />
                                <div className="input mb">
                                    <div className="hidden"><label htmlFor="name" className="required">Name</label></div>
                                    <div className="icon-container"><input type="text" name="name" id="name" placeholder="Name" className="icon-content" required /></div>
                                </div>
                                <div className="input mb">
                                    <div className="hidden"><label htmlFor="email" className="required">Email</label></div>
                                    <div className="icon-container"><input type="email" name="email" id="email" placeholder="Email" className="icon-content" required /></div>
                                </div>
                                <div className="input mb">
                                    <div className="hidden"><label htmlFor="subject" className="required">Subject</label></div>
                                    <div className="icon-container"><input type="text" name="subject" id="subject" placeholder="Subject" className="icon-content" required /></div>
                                </div>
                                <div className="input mb">
                                    <div className="hidden"><label htmlFor="message" className="required">Message</label></div>
                                    <div className="icon-container"><textarea name="message" id="message" cols="10" rows="5" placeholder="Message..." className="icon-content" required></textarea></div>
                                </div>
                                <div className="input mb">
                                    <button type="submit" className="btn text-center" style={{ color: 'rgb(0, 0, 0)' }}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="footer-section">
                <div className="container">
                    <ul className="footer-menu">
                        <li><a href="home.js">Home</a></li>
                        <li><a href="review_1.js">Games</a></li>
                        <li><a href="store.js">Store</a></li>
                        <li><a href="about_us.js">About Us</a></li>
                    </ul>
                    <p className="copyright">
                        Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script> Pegasus Games
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;