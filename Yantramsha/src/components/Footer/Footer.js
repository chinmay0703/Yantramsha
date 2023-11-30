import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Footer/Footer.css"
import 'boxicons/css/boxicons.min.css';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaGooglePlus, FaTelegramPlane } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import picc from "../../Images/errr.webp"
import lo from "../../Images/p.png"
function Footer() {
    const orangeIconStyle = {
        color: 'orange', // Set the color to orange
        fontSize: '30px', // Set the font size to 24 pixels (you can adjust as needed)
    };
    const orange = {
        color: 'orange', // Set the color to orange
        // Set the font size to 24 pixels (you can adjust as needed)
    };
    const white = {
        color: 'white', // Set the color to orange
        // Set the font size to 24 pixels (you can adjust as needed)
    };
    const fontt = {
        color: 'skyblue', // Set the color to orange
        fontSize: '30px' // Set the font size to 24 pixels (you can adjust as needed)
    };
    const si={
        width:"50px"
    }

    return (

        <div>



            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4><BiMap style={orangeIconStyle} />Find Us</h4>
                                        <span>Near Irani Cafe,Kothrud Pune</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4 className="mx-2"><FaPhone style={orange} />&nbsp;Call Us</h4>
                                        <span className="mx-2">7620846379</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open "></i>
                                    <div className="cta-text">
                                        <h4 ><FaEnvelope style={orange} />&nbsp;Mail Us</h4>
                                        <span>Yantramsha@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <div className="row">
                                            <div className="col-1">
                                                <img src={lo} style={si} className="mx-4"></img>
                                            </div>
                                            <div className="footer-widget-heading col-1 mx-5">
                                                <h1 style={white}>Yantramsha</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><FaFacebook style={fontt} /></a>
                                        <a href="#"><FaTwitter style={fontt} /></a>
                                        <a href="#"><FaTelegramPlane style={fontt} /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <img src={picc}></img>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-social-icon">
                                        <span>Subscibe</span>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button ><FaTelegramPlane /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text ">
                                    <p>Copyright &copy; 2023, All Right Reserved</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    )
}

export default Footer;
