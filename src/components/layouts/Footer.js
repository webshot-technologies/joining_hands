import React from 'react';


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
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="footer__item">
                                <a href="index.html" className="logo mb-40">
                                    <img src="images/logo/logo-light.svg" alt="image"/>
                                </a>
                                <p className="text-white">Phasellus ultricies aliquam volutpat
                                    ullamcorper laoreet neque, a lacinia
                                    curabitur lacinia mollis</p>
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
                        <div className="col-lg-2 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="footer__item">
                                <h3 className="title mb-40 text-white">Quick Links</h3>
                                <ul className="link">
                                    <li className="mb-3">
                                        <a href="about.html"><i className="fa-light fa-angles-right me-2"></i> About Us</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="cause.html"><i className="fa-light fa-angles-right me-2"></i> Our
                                            Causes</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="event.html"><i className="fa-light fa-angles-right me-2"></i> Upcoming
                                            Event</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="blog.html"><i className="fa-light fa-angles-right me-2"></i> Latest
                                            Blog</a>
                                    </li>
                                    <li>
                                        <a href="contact.html"><i className="fa-light fa-angles-right me-2"></i> Contact
                                            Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
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
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="footer__item">
                                <h3 className="title mb-40 text-white">Contact Info</h3>
                                <ul className="link info">
                                    <li className="mb-3">
                                        <a href="tel:+8555-2546-2566"><i
                                                className="fa-solid fa-phone me-1 primary-color"></i>
                                            +8
                                            555-2546-2566</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#0"><i className="fa-sharp fa-solid fa-envelope me-1 primary-color"></i>
                                            info@example.com</a>
                                    </li>
                                    <li>
                                        <a href="#0"><i className="fa-solid fa-location-dot me-1 primary-color"></i> 3891
                                            Ranchview California
                                            62639</a>
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