import React from 'react'

export const List = () => {
  return (
    <>
     {/* <!-- Sidebar area start here --> */}
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
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Causes List</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i className="fa-regular fa-angles-right mx-2"></i>Causes
                        List</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Blog single area start here --> */}
        <section className="cause-list-area pt-120 pb-120">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8 order-2 order-lg-1">
                        <div className="cause__item cause-list__item mb-30">
                            <div className="cause__image image">
                                <img src="/images/cause/cause-image1.jpg" alt="image"/>
                                <span className="cause-tag">Education</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-2"><a href="cause-single.html" className="primary-hover">Rebecca's New Album
                                        Aid for <br/> the Needy</a></h4>
                                <p className="mb-3">Nulla facilisi. Vestibulum tristique sem in eros the eleifend imperdiet
                                    donec quis
                                    convallis neque in id pulvinar lacus,
                                    eget vulputate lectus.</p>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "80%"}}><span>80%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$35.000</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cause__item cause-list__item mb-30">
                            <div className="cause__image image">
                                <img src="/images/cause/cause-image2.jpg" alt="image"/>
                                <span className="cause-tag">Foods</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-2"><a href="cause-single.html" className="primary-hover">Charity
                                        Showcases a
                                        Nation's <br/> Kindness</a></h4>
                                <p className="mb-3">Nulla facilisi. Vestibulum tristique sem in eros the eleifend imperdiet
                                    donec quis
                                    convallis neque in id pulvinar lacus,
                                    eget vulputate lectus.</p>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "70%"}}><span>70%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$30.000</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cause__item cause-list__item mb-30">
                            <div className="cause__image image">
                                <img src="/images/cause/cause-image3.jpg" alt="image"/>
                                <span className="cause-tag">Medical</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-2"><a href="cause-single.html" className="primary-hover">Construct Dwellings
                                        African <br/> Impoverished Women</a></h4>
                                <p className="mb-3">Nulla facilisi. Vestibulum tristique sem in eros the eleifend imperdiet
                                    donec quis
                                    convallis neque in id pulvinar lacus,
                                    eget vulputate lectus.</p>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "90%"}}><span>90%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$38.000</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cause__item cause-list__item mb-30">
                            <div className="cause__image image">
                                <img src="/images/cause/cause-image4.jpg" alt="image"/>
                                <span className="cause-tag">Kids In Africa</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-2"><a href="cause-single.html" className="primary-hover">Help Children Rise
                                        out of <br/>
                                        Poverty</a></h4>
                                <p className="mb-3">Nulla facilisi. Vestibulum tristique sem in eros the eleifend imperdiet
                                    donec quis
                                    convallis neque in id pulvinar lacus,
                                    eget vulputate lectus.</p>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "100%"}}><span>100%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$40.000</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cause__item cause-list__item mb-30">
                            <div className="cause__image image">
                                <img src="/images/cause/cause-image5.jpg" alt="image"/>
                                <span className="cause-tag">Foods</span>
                            </div>
                            <div className="cause__content">
                                <h4 className="mb-2"><a href="cause-single.html" className="primary-hover">Provide Healthy Meals
                                        to an <br/> Impoverished Rural Child</a></h4>
                                <p className="mb-3">Nulla facilisi. Vestibulum tristique sem in eros the eleifend imperdiet
                                    donec quis
                                    convallis neque in id pulvinar lacus,
                                    eget vulputate lectus.</p>
                                <div className="progress-area">
                                    <div className="progress__item">
                                        <div className="progress__content" style={{width: "70%"}}><span>70%</span></div>
                                    </div>
                                    <div className="progress__goal mt-15">
                                        <h6>Goal : <span>$40.000</span></h6>
                                        <h6>Raised : <span>$30.000</span></h6>
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
                    <div className="col-lg-4 order-1 order-lg-2">
                        <div className="blog-single__right-item">
                            <div className="item shadow mb-30">
                                <h5 className="title">Search</h5>
                                <div className="serach-bar">
                                    <input type="text" placeholder="Search here"/>
                                    <button><i className="fa-regular fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                            <div className="item shadow mb-30">
                                <h5 className="title">Category</h5>
                                <ul className="category">
                                    <li><a href="#0">Kids In Africa</a> <span>(2)</span></li>
                                    <li><a href="#0">Medical & Health</a> <span>(5)</span></li>
                                    <li><a href="#0">Donation</a> <span>(7)</span></li>
                                    <li><a href="#0">Water & Foods</a> <span>(8)</span></li>
                                </ul>
                            </div>
                            <div className="item shadow">
                                <h5 className="title">Resent Post</h5>
                                <ul className="single-post">
                                    <li>
                                        <img src="/images/blog/post-sm1.png" alt="image"/>
                                        <div className="con">
                                            <h6><a href="blog-single.html" className="primary-hover">More with elements
                                                    all for one low</a></h6>
                                            <span>20 Nov, 2023</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/images/blog/post-sm2.png" alt="image"/>
                                        <div className="con">
                                            <h6><a href="blog-single.html" className="primary-hover">Rebecca’s Charity Album
                                                    A Brilliant Display</a></h6>
                                            <span>20 Nov, 2023</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/images/blog/post-sm3.png" alt="image"/>
                                        <div className="con">
                                            <h6><a href="blog-single.html" className="primary-hover">Provide Healthy Meals
                                                    to an Impoverished</a></h6>
                                            <span>20 Nov, 2023</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Blog single area end here --> */}
    </main>
    </>
  )
}
export default List;
