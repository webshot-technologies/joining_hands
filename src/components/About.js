import React from 'react';
import Program from './section/Program';
import TestimonialSlider from './animation/TestimonialSlider';


function About(){
    return(
     <>
     {/* <div id="targetElement" className="sidebar-area sidebar__hide">
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
    </div> */}
    {/* <!-- Sidebar area end here --> */}

    <main>
        {/* <!-- Page banner area start here --> */}
        <section className="banner__inner-page bg-image pt-160 pb-160 bg-image" style={{backgroundImage: "url('images/banner/about-banners.jpg')"}}
            >
            <div className="container">
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">About Us</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span className='text-white'><i className="fa-regular fa-angles-right mx-2"></i>About
                        Us</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- About area start here --> */}
        <section className="about-two-area pt-120 pb-120 overflow-hidden">
            <div className="about-two__wrp">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="about-two__image image pr-60">
                                <img src="images/about/about.jpg" alt="image"/>
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
                                        <img src="/images/icon/about-icon1.png" alt="icon"/>
                                    </div>
                                    <div className="content">
                                        <h6 className="mb-10">Quick Fundraise</h6>
                                        <p>Embarrassing hidden in the middle of All the Lorem Ipsum generators on the
                                            Internet to repeat predefined chunks</p>
                                    </div>
                                </div>
                                <div className="item wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="icon">
                                        <img src="/images/icon/about-icon2.png" alt="icon"/>
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
                                    {/* <div className="info-video">
                                        <a className="video-popup" href="https://www.youtube.com/watch?v=ElG5-nXD0B8"><i
                                                className="fa-solid fa-play"></i></a>
                                        <h6>Intro Video</h6>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About area end here --> */}
        {/* <!-- Service area start here --> */}
<Program/>
       
        {/* <!-- Service area end here --> */}

        

        {/* <!-- Team area start here --> */}
        <section className="team-area pt-120 pb-120 sub-bg">
            <div className="container">
                <div className="section-header mb-60 text-center">
                    
                    <h2 className="wow fadeInUp " data-wow-delay="200ms" data-wow-duration="1500ms">Board of Trustees</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img  src="images/team/board-1.jpg" alt="image"/>
                            <div className="team__content">
                              
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Mr. Ardeshir B K Dubash</a></h4>
                                    <span>Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="images/team/board-2.jpg" alt="image"/>
                            <div className="team__content">
                                
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Mr. Rajendra Arora
                                   </a></h4>
                                    {/* <h4><a href="team-single.html" className="primary-hover">
                                    Mr. Sharang Shah </a></h4> */}
                                    <span>Trustee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="images/team/board-3.jpg" alt="image"/>
                            <div className="team__content">
                               
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Ms. Kavita Shah</a></h4>
                                    <span>Advisor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Team area end here --> */}

        {/* <!-- Testimonial area start here --> */}
        <TestimonialSlider/>
       
        {/* <!-- Testimonial area end here --> */}
    </main>
     </>
    );

}
export default About;