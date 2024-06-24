import React from 'react'

export const Volunteer = () => {
  return (
    <>
    <div id="targetElement" className="sidebar-area sidebar__hide">
        <div className="sidebar__overlay"></div>
        <a href="index.html" className="logo mb-40">
            <img src="/images/logo/logo-light.svg" alt="logo"/>
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
        <section className="banner__inner-page bg-image pt-160 pb-160 bg-image" style={{backgroundImage:"url('/images/banner/banner-inner-page.jpg')"}}
           >
            <div className="container">
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Volunteer</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i className="fa-regular fa-angles-right mx-2"></i>Volunteer</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Team area start here --> */}
        <section className="team-area pt-120 pb-120">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="/images/team/team-image1.jpg" alt="image"/>
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
                            <img src="/images/team/team-image2.jpg" alt="image"/>
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
                            <img src="/images/team/team-image4.jpg" alt="image"/>
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
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="/images/team/team-image3.jpg" alt="image"/>
                            <div className="team__content">
                                <div className="social-icon mb-30">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="active" href="#0"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Karniz Fatema</a></h4>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="/images/team/team-image5.jpg" alt="image"/>
                            <div className="team__content">
                                <div className="social-icon mb-30">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="active" href="#0"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Kawser Ahmed</a></h4>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="team__item image">
                            <img src="/images/team/team-image6.jpg" alt="image"/>
                            <div className="team__content">
                                <div className="social-icon mb-30">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="active" href="#0"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                                <div className="content">
                                    <h4><a href="team-single.html" className="primary-hover">Mahadi Hasan</a></h4>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Team area end here --> */}
    </main>
    </>
  )
}
export default Volunteer;