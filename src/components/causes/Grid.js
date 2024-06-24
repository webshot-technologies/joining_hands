import React from 'react'

export const Grid = () => {
  return (
    <>
     <div id="targetElement" className="sidebar-area sidebar__hide">
        <div className="sidebar__overlay"></div>
        <a href="index.html" className="logo mb-40">
            <img src="images/logo/logo-light.svg" alt="logo"/>
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
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Causes Grid</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i className="fa-regular fa-angles-right mx-2"></i>Causes Grid</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Cause area start here --> */}
        <section className="cause-area pt-120 pb-120">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="cause__item">
                            <div className="cause__image image">
                                <img src="images/cause/cause-image2.jpg" alt="image"/>
                                <span className="cause-tag">Foods</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-4 mt-20"><a href="cause-single.html" className="primary-hover">Charity
                                        Showcases a
                                        Nation's Kindness</a></h4>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "70%"}}><span>70%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$30.000</span></h6>
                                    </div>
                                    <div className="btn-three mt-30">
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
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="cause__item">
                            <div className="cause__image image">
                                <img src="images/cause/cause-image3.jpg" alt="image"/>
                                <span className="cause-tag">Medical</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-4 mt-20"><a href="cause-single.html" className="primary-hover">Construct
                                        Dwellings
                                        African Impoverished Women
                                    </a></h4>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "90%"}}><span>90%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$35.000</span></h6>
                                    </div>
                                    <div className="btn-three mt-30">
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
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="cause__item">
                            <div className="cause__image image">
                                <img src="images/cause/cause-image1.jpg" alt="image"/>
                                <span className="cause-tag">Education</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-4 mt-20"><a href="cause-single.html" className="primary-hover">Rebecca's New
                                        Album Aid
                                        for
                                        the
                                        Needy</a></h4>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "50%"}}><span>50%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$20.000</span></h6>
                                    </div>
                                    <div className="btn-three mt-30">
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
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="cause__item">
                            <div className="cause__image image">
                                <img src="images/cause/cause-image4.jpg" alt="image"/>
                                <span className="cause-tag">Water</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-4 mt-20"><a href="cause-single.html" className="primary-hover">Provide Healthy
                                        Meals to an Impoverished Rural Child</a></h4>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "70%"}}><span>70%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$30.000</span></h6>
                                    </div>
                                    <div className="btn-three mt-30">
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
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="cause__item">
                            <div className="cause__image image">
                                <img src="images/cause/cause-image5.jpg" alt="image"/>
                                <span className="cause-tag">Medical</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-4 mt-20"><a href="cause-single.html" className="primary-hover">Construct
                                        Dwellings
                                        African Impoverished Women
                                    </a></h4>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "90%"}}><span>90%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$35.000</span></h6>
                                    </div>
                                    <div className="btn-three mt-30">
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
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="cause__item">
                            <div className="cause__image image">
                                <img src="images/cause/cause-image6.jpg" alt="image"/>
                                <span className="cause-tag">Kids In Africa</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-4 mt-20"><a href="cause-single.html" className="primary-hover">Rebecca's New
                                        Album Aid
                                        for
                                        the
                                        Needy</a></h4>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "50%"}}><span>50%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$20.000</span></h6>
                                    </div>
                                    <div className="btn-three mt-30">
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
                        </div>
                    </div>
                </div>
                {/* <div className="pegi justify-content-center mt-80">
                    <a href="#0" className="active">01</a>
                    <a href="#0">02</a>
                    <a href="#0">03</a>
                    <a href="#0"><i className="fa-solid fa-arrow-right-long primary-color transition"></i></a>
                </div> */}
            </div>
        </section>
        {/* <!-- Cause area end here --> */}
    </main>
    </>
  )
}
export default Grid;
