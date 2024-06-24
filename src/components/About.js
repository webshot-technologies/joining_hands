import React from 'react';


function About(){
    return(
     <>
     <div id="targetElement" className="sidebar-area sidebar__hide">
        <div className="sidebar__overlay"></div>
        <a href="index.html" className="logo mb-40">
            <img src="assets/images/logo/logo-light.svg" alt="logo"/>
        </a>
        <div className="mobile-menu overflow-hidden"></div>
        <ul className="info pt-40">
            <li><i className="fa-solid primary-color fa-location-dot"></i> <a href="#0">example@example.com</a>
            </li>
            <li className="py-2"><i className="fa-solid primary-color fa-phone-volume"></i> <a
                    href="tel:+208-6666-0112">+208-6666-0112</a>
            </li>
            <li><i className="fa-solid primary-color fa-paper-plane"></i> <a href="#0">info@example.com</a></li>
        </ul>
        <div className="social-icon mt-20">
            <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#0"><i className="fa-brands fa-twitter"></i></a>
            <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
        </div>
        <button id="closeButton" className="text-white"><i className="fa-solid fa-xmark"></i></button>
    </div>
    {/* <!-- Sidebar area end here --> */}

    <main>
        {/* <!-- Page banner area start here --> */}
        <section className="banner__inner-page bg-image pt-160 pb-160 bg-image" style={{backgroundImage: "url('images/banner/banner-inner-page.jpg')"}}
            >
            <div className="container">
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">About Us</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i className="fa-regular fa-angles-right mx-2"></i>About
                        Us</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- About area start here --> */}
        <section className="about-area pt-120 pb-120">
            <div className="container">
                <div className="row g-2 align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about__image">
                            <div className="dots about-dot__animation">
                                <img src="images/shape/about-dot.png" alt="dots"/>
                            </div>
                            <div className="sm-image">
                                <img src="images/about/about-image2.png" alt="image"/>
                            </div>
                            <div className="image">
                                <img src="images/about/about-image1.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header mb-20">
                            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <i className="fa-regular fa-angles-left pe-1"></i> ABOUT US <i
                                    className="fa-regular fa-angles-right ps-1"></i>
                            </h5>
                            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Discover Charity
                                Organization Information</h2>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">It is a long
                                established fact that a reader will be distracted the readable content of a
                                page when looking at layout the
                                point of using lorem Ipsum <br/>
                                less normal distribution of letters.</p>
                        </div>
                        <div className="about__content">
                            <div className="progress-area wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="progress__title mb-10">
                                    <h5 className="fs-16">Charity</h5>
                                    <span><span className="progress-count">80</span>%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration=".8s" role="progressbar"
                                        style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 mt-10 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="col-6">
                                    <h6 className="fs-14">
                                        <svg className="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_20_5)">
                                                <path
                                                    d="M17.4853 2.46073C17.2205 2.19547 16.7909 2.19502 16.5261 2.4596L8.38765 10.5765L5.45133 7.38742C5.1976 7.112 4.76863 7.09415 4.49276 7.34783C4.2171 7.60156 4.19945 8.03074 4.45317 8.3064L7.86776 12.0147C7.92961 12.082 8.00443 12.136 8.08771 12.1736C8.17099 12.2111 8.26101 12.2315 8.35235 12.2334C8.35731 12.2336 8.36209 12.2336 8.36683 12.2336C8.54636 12.2335 8.71855 12.1624 8.84577 12.0357L17.484 3.42018C17.7494 3.15563 17.7499 2.72598 17.4853 2.46073Z"
                                                    fill="#F74F22" />
                                                <path
                                                    d="M17.3216 8.32159C16.9469 8.32159 16.6432 8.62527 16.6432 9C16.6432 13.2146 13.2146 16.6432 9 16.6432C4.78561 16.6432 1.35679 13.2146 1.35679 9C1.35679 4.78561 4.78561 1.35679 9 1.35679C9.3747 1.35679 9.67841 1.05311 9.67841 0.67841C9.67841 0.30368 9.3747 0 9 0C4.03734 0 0 4.03734 0 9C0 13.9624 4.03734 18 9 18C13.9624 18 18 13.9624 18 9C18 8.6253 17.6963 8.32159 17.3216 8.32159Z"
                                                    fill="#F74F22" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Immediate Assistance
                                    </h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="fs-14">
                                        <svg className="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_20_5)">
                                                <path
                                                    d="M17.4853 2.46073C17.2205 2.19547 16.7909 2.19502 16.5261 2.4596L8.38765 10.5765L5.45133 7.38742C5.1976 7.112 4.76863 7.09415 4.49276 7.34783C4.2171 7.60156 4.19945 8.03074 4.45317 8.3064L7.86776 12.0147C7.92961 12.082 8.00443 12.136 8.08771 12.1736C8.17099 12.2111 8.26101 12.2315 8.35235 12.2334C8.35731 12.2336 8.36209 12.2336 8.36683 12.2336C8.54636 12.2335 8.71855 12.1624 8.84577 12.0357L17.484 3.42018C17.7494 3.15563 17.7499 2.72598 17.4853 2.46073Z"
                                                    fill="#F74F22" />
                                                <path
                                                    d="M17.3216 8.32159C16.9469 8.32159 16.6432 8.62527 16.6432 9C16.6432 13.2146 13.2146 16.6432 9 16.6432C4.78561 16.6432 1.35679 13.2146 1.35679 9C1.35679 4.78561 4.78561 1.35679 9 1.35679C9.3747 1.35679 9.67841 1.05311 9.67841 0.67841C9.67841 0.30368 9.3747 0 9 0C4.03734 0 0 4.03734 0 9C0 13.9624 4.03734 18 9 18C13.9624 18 18 13.9624 18 9C18 8.6253 17.6963 8.32159 17.3216 8.32159Z"
                                                    fill="#F74F22" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_20_5">
                                                    <rect width="18px" height="18px" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Quick Fundraise
                                    </h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="fs-14">
                                        <svg className="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_20_5)">
                                                <path
                                                    d="M17.4853 2.46073C17.2205 2.19547 16.7909 2.19502 16.5261 2.4596L8.38765 10.5765L5.45133 7.38742C5.1976 7.112 4.76863 7.09415 4.49276 7.34783C4.2171 7.60156 4.19945 8.03074 4.45317 8.3064L7.86776 12.0147C7.92961 12.082 8.00443 12.136 8.08771 12.1736C8.17099 12.2111 8.26101 12.2315 8.35235 12.2334C8.35731 12.2336 8.36209 12.2336 8.36683 12.2336C8.54636 12.2335 8.71855 12.1624 8.84577 12.0357L17.484 3.42018C17.7494 3.15563 17.7499 2.72598 17.4853 2.46073Z"
                                                    fill="#F74F22" />
                                                <path
                                                    d="M17.3216 8.32159C16.9469 8.32159 16.6432 8.62527 16.6432 9C16.6432 13.2146 13.2146 16.6432 9 16.6432C4.78561 16.6432 1.35679 13.2146 1.35679 9C1.35679 4.78561 4.78561 1.35679 9 1.35679C9.3747 1.35679 9.67841 1.05311 9.67841 0.67841C9.67841 0.30368 9.3747 0 9 0C4.03734 0 0 4.03734 0 9C0 13.9624 4.03734 18 9 18C13.9624 18 18 13.9624 18 9C18 8.6253 17.6963 8.32159 17.3216 8.32159Z"
                                                    fill="#F74F22" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Long-Time Support
                                    </h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="fs-14">
                                        <svg className="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_20_5)">
                                                <path
                                                    d="M17.4853 2.46073C17.2205 2.19547 16.7909 2.19502 16.5261 2.4596L8.38765 10.5765L5.45133 7.38742C5.1976 7.112 4.76863 7.09415 4.49276 7.34783C4.2171 7.60156 4.19945 8.03074 4.45317 8.3064L7.86776 12.0147C7.92961 12.082 8.00443 12.136 8.08771 12.1736C8.17099 12.2111 8.26101 12.2315 8.35235 12.2334C8.35731 12.2336 8.36209 12.2336 8.36683 12.2336C8.54636 12.2335 8.71855 12.1624 8.84577 12.0357L17.484 3.42018C17.7494 3.15563 17.7499 2.72598 17.4853 2.46073Z"
                                                    fill="#F74F22" />
                                                <path
                                                    d="M17.3216 8.32159C16.9469 8.32159 16.6432 8.62527 16.6432 9C16.6432 13.2146 13.2146 16.6432 9 16.6432C4.78561 16.6432 1.35679 13.2146 1.35679 9C1.35679 4.78561 4.78561 1.35679 9 1.35679C9.3747 1.35679 9.67841 1.05311 9.67841 0.67841C9.67841 0.30368 9.3747 0 9 0C4.03734 0 0 4.03734 0 9C0 13.9624 4.03734 18 9 18C13.9624 18 18 13.9624 18 9C18 8.6253 17.6963 8.32159 17.3216 8.32159Z"
                                                    fill="#F74F22" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Handle With Care
                                    </h6>
                                </div>
                            </div>
                            <div className="d-flex align-content-center flex-wrap gap-4 mt-40 wow fadeInDown"
                                data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="btn-two">
                                    <span className="btn-circle">
                                    </span>
                                    <a href="about.html" className="btn-inner">
                                        <span className="btn-text">
                                            EXPLORE MORE
                                        </span>
                                    </a>
                                </div>
                                <div className="about-info">
                                    <img src="assets/images/about/about-info.png" alt="image"/>
                                    <div className="con">
                                        <h5 className="fs-16">Albert Flores</h5>
                                        <span className="sm-font">CEO, Donatim</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About area end here --> */}

        {/* <!-- Service area start here --> */}
        <section className="service-area pt-100 pb-100 sub-bg">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="service__item">
                            <div className="service__icon"><img src="images/icon/service1.png" alt="icon"/></div>
                            <div className="service__content">
                                <h3 className="text-white">Kids Education</h3>
                                <p className="text-white">Every is to be welcomed in certain circumstances</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="service__item active">
                            <div className="service__icon"><img src="images/icon/service2.png" alt="icon"/></div>
                            <div className="service__content">
                                <h3 className="text-white">Healthy Food</h3>
                                <p className="text-white">Every is to be welcomed in certain circumstances</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="service__item">
                            <div className="service__icon"><img src="images/icon/service3.png" alt="icon"/></div>
                            <div className="service__content">
                                <h3 className="text-white">Medical Help</h3>
                                <p className="text-white">Every is to be welcomed in certain circumstances</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Service area end here --> */}

        {/* <!-- About area start here --> */}
        <section className="about-two-area pt-120 pb-120 overflow-hidden">
            <div className="about-two__wrp">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="about-two__image image pr-60">
                                <img src="images/about/about-two-image1.jpg" alt="image"/>
                                <div className="line-shape sway_Y__animation">
                                    <img src="images/shape/about-line.png" alt="shape"/>
                                </div>
                                <div className="dot-shape sway__animation">
                                    <img src="images/shape/about-dot3.png" alt="shape"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-header mb-20">
                                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <i className="fa-regular fa-angles-left pe-1"></i> ABOUT US <i
                                        className="fa-regular fa-angles-right ps-1"></i>
                                </h5>
                                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Explore
                                    Information About Charitable Organizations</h2>
                                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">It is a long
                                    established fact that a reader will be distracted the readable content
                                    of a
                                    page when looking at layout the
                                    point of using lorem Ipsum <br/>
                                    less normal distribution of letters.</p>
                            </div>
                            <div className="about-two__content">
                                <div className="item mb-30 wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="icon">
                                        <img src="assets/images/icon/about-icon1.png" alt="icon"/>
                                    </div>
                                    <div className="content">
                                        <h6 className="mb-10">Quick Fundraise</h6>
                                        <p>Embarrassing hidden in the middle of All the Lorem Ipsum generators on the
                                            Internet to repeat predefined chunks</p>
                                    </div>
                                </div>
                                <div className="item wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="icon">
                                        <img src="assets/images/icon/about-icon2.png" alt="icon"/>
                                    </div>
                                    <div className="content">
                                        <h6 className="mb-10">Long -Time Support</h6>
                                        <p>Embarrassing hidden in the middle of All the Lorem Ipsum generators on the
                                            Internet to repeat predefined chunks</p>
                                    </div>
                                </div>
                                <div className="d-flex align-content-center flex-wrap gap-4 mt-40 wow fadeInDown"
                                    data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="btn-two">
                                        <span className="btn-circle">
                                        </span>
                                        <a href="about.html" className="btn-inner">
                                            <span className="btn-text">
                                                ABOUT MORE
                                            </span>
                                        </a>
                                    </div>
                                    <div className="info-video">
                                        <a className="video-popup" href="https://www.youtube.com/watch?v=ElG5-nXD0B8"><i
                                                className="fa-solid fa-play"></i></a>
                                        <h6>Intro Video</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About area end here --> */}

        {/* <!-- Team area start here --> */}
        <section className="team-area pt-120 pb-120 sub-bg">
            <div className="container">
                <div className="section-header mb-60 text-center">
                    <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <i className="fa-regular fa-angles-left pe-1"></i> Our Volunteers <i
                            className="fa-regular fa-angles-right ps-1"></i>
                    </h5>
                    <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Volunteers Our Precious
                        Assets</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="images/team/team-image1.jpg" alt="image"/>
                            <div className="team__content">
                                <div className="social-icon mb-30">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="active" href="#0"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Kristin Watson</a></h4>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="images/team/team-image2.jpg" alt="image"/>
                            <div className="team__content">
                                <div className="social-icon mb-30">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="active" href="#0"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Ralph Edwards</a></h4>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="images/team/team-image3.jpg" alt="image"/>
                            <div className="team__content">
                                <div className="social-icon mb-30">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="active" href="#0"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Leslie Alexander</a></h4>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Team area end here --> */}

        {/* <!-- Testimonial area start here --> */}
        <section className="testimonial-area pt-120 pb-120">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 mb-50">
                    <div className="section-header">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <i className="fa-regular fa-angles-left pe-1"></i> Testimonials <i
                                className="fa-regular fa-angles-right ps-1"></i>
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Why People Love Us
                        </h2>
                    </div>
                    <div className="arry-btn wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <button className="arry-prev testimonial__arry-prev"><i
                                className="fa-regular fa-chevron-left"></i></button>
                        <button className="arry-next testimonial__arry-next active ml-10"><i
                                className="fa-regular fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="swiper testimonial__slider">
                <div className="swiper-wrapper pt-10 pb-20">
                    <div className="swiper-slide">
                        <div className="testimonial__item shadow">
                            <svg className="shape" width="59" height="67" viewBox="0 0 59 67" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="59"
                                    height="67">
                                    <rect width="59" height="67" fill="#F74F22" />
                                </mask>
                                <g mask="url(#mask0_87_43)">
                                    <circle opacity="0.7" cx="59" cy="9" r="56" fill="#F74F22" />
                                    <circle cx="59" cy="9" r="47.5" fill="#F74F22" stroke="white"
                                        stroke-dasharray="2 2" />
                                </g>
                            </svg>

                            <div className="top">
                                <div className="image">
                                    <img src="images/testimonial/testimonial-image1.png" alt="image"/>
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M29 28C30.625 28 32 26.625 32 25V10C32 4.4375 27.5 0 22 0H21.5C20.625 0 20 0.625 20 1.5V4.5C20 5.3125 20.625 6 21.5 6H22C24.1875 6 26 7.75 26 10V14H21C19.3125 14 18 15.3125 18 17V25C18 26.625 19.3125 28 21 28H29ZM11 28C12.625 28 14 26.625 14 25V10C14 4.4375 9.5 0 4 0H3.5C2.625 0 2 0.625 2 1.5V4.5C2 5.3125 2.625 6 3.5 6H4C6.1875 6 8 7.75 8 10V14H3C1.3125 14 0 15.3125 0 17V25C0 26.625 1.3125 28 3 28H11Z"
                                            fill="#F74F22" />
                                    </svg>

                                </div>
                                <div className="con">
                                    <div className="star">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <h5>Esther Howard</h5>
                                    <span>Dog Trainer</span>
                                </div>
                            </div>
                            <p className="mt-30">Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the
                                laoreet
                                est, a pretium
                                metus aliquam eget. Maecenas
                                porta is nunc ut viverra. Aenean pulvinar maximus leo.</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial__item shadow">
                            <svg className="shape" width="59" height="67" viewBox="0 0 59 67" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="59"
                                    height="67">
                                    <rect width="59" height="67" fill="#F74F22" />
                                </mask>
                                <g mask="url(#mask0_87_43)">
                                    <circle opacity="0.7" cx="59" cy="9" r="56" fill="#F74F22" />
                                    <circle cx="59" cy="9" r="47.5" fill="#F74F22" stroke="white"
                                        stroke-dasharray="2 2" />
                                </g>
                            </svg>

                            <div className="top">
                                <div className="image">
                                    <img src="images/testimonial/testimonial-image2.png" alt="image"/>
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M29 28C30.625 28 32 26.625 32 25V10C32 4.4375 27.5 0 22 0H21.5C20.625 0 20 0.625 20 1.5V4.5C20 5.3125 20.625 6 21.5 6H22C24.1875 6 26 7.75 26 10V14H21C19.3125 14 18 15.3125 18 17V25C18 26.625 19.3125 28 21 28H29ZM11 28C12.625 28 14 26.625 14 25V10C14 4.4375 9.5 0 4 0H3.5C2.625 0 2 0.625 2 1.5V4.5C2 5.3125 2.625 6 3.5 6H4C6.1875 6 8 7.75 8 10V14H3C1.3125 14 0 15.3125 0 17V25C0 26.625 1.3125 28 3 28H11Z"
                                            fill="#F74F22" />
                                    </svg>

                                </div>
                                <div className="con">
                                    <div className="star">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <h5>Annette Black</h5>
                                    <span>Software Developer</span>
                                </div>
                            </div>
                            <p className="mt-30">Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the
                                laoreet
                                est, a pretium
                                metus aliquam eget. Maecenas
                                porta is nunc ut viverra. Aenean pulvinar maximus leo.</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial__item shadow">
                            <svg className="shape" width="59" height="67" viewBox="0 0 59 67" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="59"
                                    height="67">
                                    <rect width="59" height="67" fill="#F74F22" />
                                </mask>
                                <g mask="url(#mask0_87_43)">
                                    <circle opacity="0.7" cx="59" cy="9" r="56" fill="#F74F22" />
                                    <circle cx="59" cy="9" r="47.5" fill="#F74F22" stroke="white"
                                        stroke-dasharray="2 2" />
                                </g>
                            </svg>

                            <div className="top">
                                <div className="image">
                                    <img src="images/testimonial/testimonial-image3.png" alt="image"/>
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M29 28C30.625 28 32 26.625 32 25V10C32 4.4375 27.5 0 22 0H21.5C20.625 0 20 0.625 20 1.5V4.5C20 5.3125 20.625 6 21.5 6H22C24.1875 6 26 7.75 26 10V14H21C19.3125 14 18 15.3125 18 17V25C18 26.625 19.3125 28 21 28H29ZM11 28C12.625 28 14 26.625 14 25V10C14 4.4375 9.5 0 4 0H3.5C2.625 0 2 0.625 2 1.5V4.5C2 5.3125 2.625 6 3.5 6H4C6.1875 6 8 7.75 8 10V14H3C1.3125 14 0 15.3125 0 17V25C0 26.625 1.3125 28 3 28H11Z"
                                            fill="#F74F22" />
                                    </svg>

                                </div>
                                <div className="con">
                                    <div className="star">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <h5>Kristin Watson</h5>
                                    <span>Team Leader</span>
                                </div>
                            </div>
                            <p className="mt-30">Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the
                                laoreet
                                est, a pretium
                                metus aliquam eget. Maecenas
                                porta is nunc ut viverra. Aenean pulvinar maximus leo.</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial__item shadow">
                            <svg className="shape" width="59" height="67" viewBox="0 0 59 67" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="59"
                                    height="67">
                                    <rect width="59" height="67" fill="#F74F22" />
                                </mask>
                                <g mask="url(#mask0_87_43)">
                                    <circle opacity="0.7" cx="59" cy="9" r="56" fill="#F74F22" />
                                    <circle cx="59" cy="9" r="47.5" fill="#F74F22" stroke="white"
                                        stroke-dasharray="2 2" />
                                </g>
                            </svg>

                            <div className="top">
                                <div className="image">
                                    <img src="images/testimonial/testimonial-image4.png" alt="image"/>
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M29 28C30.625 28 32 26.625 32 25V10C32 4.4375 27.5 0 22 0H21.5C20.625 0 20 0.625 20 1.5V4.5C20 5.3125 20.625 6 21.5 6H22C24.1875 6 26 7.75 26 10V14H21C19.3125 14 18 15.3125 18 17V25C18 26.625 19.3125 28 21 28H29ZM11 28C12.625 28 14 26.625 14 25V10C14 4.4375 9.5 0 4 0H3.5C2.625 0 2 0.625 2 1.5V4.5C2 5.3125 2.625 6 3.5 6H4C6.1875 6 8 7.75 8 10V14H3C1.3125 14 0 15.3125 0 17V25C0 26.625 1.3125 28 3 28H11Z"
                                            fill="#F74F22" />
                                    </svg>

                                </div>
                                <div className="con">
                                    <div className="star">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <h5>Ralph Edwards</h5>
                                    <span>UI/UX Designer</span>
                                </div>
                            </div>
                            <p className="mt-30">Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the
                                laoreet
                                est, a pretium
                                metus aliquam eget. Maecenas
                                porta is nunc ut viverra. Aenean pulvinar maximus leo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Testimonial area end here --> */}
    </main>
     </>
    );

}
export default About;