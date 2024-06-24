import React from 'react'

export const Project = () => {
  return (
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
        <section className="banner__inner-page bg-image pt-160 pb-160 bg-image" style={{backgroundImage:"url('/images/banner/banner-inner-page.jpg')"}}
          >
            <div className="container">
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Project</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i className="fa-regular fa-angles-right mx-2"></i>Project</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Project area start here --> */}
        <section className="project-area pt-120 pb-120">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="project__item">
                            <div className="image">
                                <img src="/images/project/project-image1.jpg" alt="image"/>
                            </div>
                            <div className="project__content">
                                <div className="con">
                                    <h4><a href="project-single.html" className="text-white">Leslie Alexander</a></h4>
                                    <span className="text-white">Volunteer</span>
                                </div>
                                <a href="project-single.html" className="next-btn"><i
                                        className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="project__item">
                            <div className="image">
                                <img src="/images/project/project-image2.jpg" alt="image"/>
                            </div>
                            <div className="project__content">
                                <div className="con">
                                    <h4><a href="project-single.html" className="text-white">Leslie Alexander</a></h4>
                                    <span className="text-white">Volunteer</span>
                                </div>
                                <a href="project-single.html" className="next-btn"><i
                                        className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="project__item">
                            <div className="image">
                                <img src="/images/project/project-image-big.jpg" alt="image"/>
                            </div>
                            <div className="project__content">
                                <div className="con">
                                    <h4><a href="project-single.html" className="text-white">Leslie Alexander</a></h4>
                                    <span className="text-white">Volunteer</span>
                                </div>
                                <a href="project-single.html" className="next-btn"><i
                                        className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="project__item">
                            <div className="image">
                                <img src="/images/project/project-image-sm.jpg" alt="image"/>
                            </div>
                            <div className="project__content">
                                <div className="con">
                                    <h4><a href="project-single.html" className="text-white">Leslie Alexander</a></h4>
                                    <span className="text-white">Volunteer</span>
                                </div>
                                <a href="project-single.html" className="next-btn"><i
                                        className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="project__item">
                            <div className="image">
                                <img src="/images/project/project-image3.jpg" alt="image"/>
                            </div>
                            <div className="project__content">
                                <div className="con">
                                    <h4><a href="project-single.html" className="text-white">Leslie Alexander</a></h4>
                                    <span className="text-white">Volunteer</span>
                                </div>
                                <a href="project-single.html" className="next-btn"><i
                                        className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="project__item">
                            <div className="image">
                                <img src="/images/project/project-image4.jpg" alt="image"/>
                            </div>
                            <div className="project__content">
                                <div className="con">
                                    <h4><a href="project-single.html" className="text-white">Leslie Alexander</a></h4>
                                    <span className="text-white">Volunteer</span>
                                </div>
                                <a href="project-single.html" className="next-btn"><i
                                        className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Project area end here --> */}
    </main>
    </>
  )
}
export default Project;
