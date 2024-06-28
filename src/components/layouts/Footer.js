import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <footer className="footer-area secondary-bg overflow-hidden">
        <div className="footer__main-wrp">
            <div className="footer__shape-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <img className="footer__shape__animation" src="images/shape/footer-shape-left.png" alt="shape"/>
            </div>
            <div className="footer__shape-right wow slideInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                <img className="footer__shape__animation-right" src="images/shape/footer-shape-right.png"
                    alt="shape"/>
            </div>
            <div className="container">
                <div className="footer__wrp pt-120 pb-120">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="footer__item">
                                <a href="index.html" className="logo mb-40">
                                    <img src="/images/logo/logo.png" alt="image"/>
                                </a>
                                <p className="text-white">To socially and economically empower the youth who act as agents of change in creating a more equitable world.</p>
                                <div className="btn-one mt-40">
                                    <span className="btn-circle">
                                    </span>
                                    <a href="cause-single.html" className="btn-inner">
                                        <span className="btn-text">
                                            DONATE NOW
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="footer__item">
                                <h3 className="title mb-40 text-white">Quick Links</h3>
                                <ul className="link">
                                    <li className="mb-3">
                                        <Link to={'about'}><i className="fa-light fa-angles-right me-2"></i> About Us</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to={'/single'}><i className="fa-light fa-angles-right me-2"></i> What We Do
                                            </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to={"/volunteerSingle"}><i className="fa-light fa-angles-right me-2"></i> What You Can Do</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to={"/Project"}><i className="fa-light fa-angles-right me-2"></i> Gallery</Link>
                                    </li>
                                    <li className='mb-3'>
                                        <Link to={"/stories-of-hope"}><i className="fa-light fa-angles-right me-2"></i> Stories of hope
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to={"/contact"}><i className="fa-light fa-angles-right me-2"></i>Contact
                                            Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="footer__item">
                                <h3 className="title mb-40 text-white">Latest Post</h3>
                                <ul className="post">
                                    <li className="mb-3">
                                        <div className="image">
                                            <img src="images/footer/footer-blog1.png" alt="image"/>
                                        </div>
                                        <div className="con"><span>22, Nov 2023</span>
                                            <a href="blog-single.html">
                                                Provide Healthy Impoverished..
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <img src="images/footer/footer-blog2.png" alt="image"/>
                                        </div>
                                        <div className="con"><span>18, Nov 2023</span>
                                            <a href="blog-single.html">
                                                Rebecca’s New <br/>
                                                Album..
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="footer__item">
                                <h3 className="title mb-40 text-white">Contact Info</h3>
                                <ul className="link info">
                                    <li className="mb-3">
                                        <a href="tel:+8555-2546-2566"><i
                                                className="fa-solid fa-phone me-1 primary-color"></i>
                                            +91 11 46562485</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#0"><i className="fa-sharp fa-solid fa-envelope me-1 primary-color"></i>
                                            info@joininghandsindia.org</a>
                                    </li>
                                    <li>
                                        <a href="#0"><i className="fa-solid fa-location-dot me-1 primary-color"></i>A-38, 1st floor, Lajpat Nagar IV, Block A, Amar Colony, Lajpat Nagar, New Delhi 110024</a>
                                    </li>
                                </ul>
                                <div className="social-icon mt-30">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="active" href="#0"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__copytext">
            <p className="wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">&copy; All Copyright 2023 by <a
                    href="#0" className="text-white primary-hover">Webshot</a></p>
        </div>
    </footer>

    );

}

export default Footer;