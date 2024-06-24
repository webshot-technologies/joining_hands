import React from 'react'

export const VolunteerSingle = () => {
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
        <section className="banner__inner-page bg-image pt-160 pb-160 bg-image" style={{backgroundImage: "url('/images/banner/banner-inner-page.jpg')"}}
          >
            <div className="container">
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Volunteer Single</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i className="fa-regular fa-angles-right mx-2"></i>Volunteer
                        Single</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Team single area start here --> */}
        <section className="team-single pt-120 pb-120">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="team-single__image">
                            <img src="/images/team/team-image1.jpg" alt="image"/>
                            <div className="team-info">
                                <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#0" className="active"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#0"><i className="fa-brands fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="team-single__content">
                            <div className="title pb-20 mb-20 bor-bottom">
                                <h3>Karniz Fatema</h3>
                                <span className="primary-color mt-1">Project Manager</span>
                            </div>
                            <div className="team-single__info">
                                <h4 className="pb-2">About Me</h4>
                                <p className="mb-20">This good man possesses qualities that inspire us all. He is selfless,
                                    always putting
                                    the needs of others before his
                                    own. Whether it's helping a neighbor in distress, volunteering at local charities,
                                    or simply lending a listening ear to
                                    those who need it, he consistently demonstrates the true meaning of altruism.
                                </p>
                                <p>This good man is a source of unwavering support and
                                    encouragement to those around
                                    him. He is a pillar of strength in
                                    times of adversity and a wellspring of joy in times of celebration.
                                </p>
                                <div className="skills mt-40">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="experience-progress-wrapper">
                                                <div className="experience-progress pb-4">
                                                    <div
                                                        className="experience-title-wrapper d-flex align-items-center justify-content-between">
                                                        <h5 className="experience-title pb-2">Quick Fundraise</h5>
                                                        <span className="exp" style={{left:"90%"}}>90%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow slideInLeft"
                                                            data-wow-duration=".8s" role="progressbar"
                                                            style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="experience-progress pb-4">
                                                    <div
                                                        className="experience-title-wrapper d-flex justify-content-between align-items-center">
                                                        <h5 className="experience-title pb-2">Donation</h5>
                                                        <span style={{left:"85%"}}>85%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow slideInLeft"
                                                            data-wow-duration=".9s" role="progressbar"
                                                            style={{width: "85%"}} aria-valuenow="95" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="experience-progress-wrapper">
                                                <div className="experience-progress pb-4">
                                                    <div
                                                        className="experience-title-wrapper d-flex align-items-center justify-content-between">
                                                        <h5 className="experience-title pb-2">Consultant</h5>
                                                        <span className="exp" style={{left:"95%"}}>95%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow slideInLeft"
                                                            data-wow-duration=".8s" role="progressbar"
                                                            style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="experience-progress pb-4">
                                                    <div
                                                        className="experience-title-wrapper d-flex justify-content-between align-items-center">
                                                        <h5 className="experience-title pb-2">Charity</h5>
                                                        <span style={{left:"98%"}} >98%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow slideInLeft"
                                                            data-wow-duration=".9s" role="progressbar"
                                                            style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-single-history mt-60">
                <div className="container">
                    <div className="title pb-30 mb-30 bor-bottom">
                        <h3>Education Background</h3>
                    </div>
                    <h4><span className="primary-color text-capitalize mb-3">Bachelor's degree</span>, 2010</h4>
                    <p>Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat,
                        ornare
                        eget tristique
                        vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus
                        sem
                        id massa semper
                        ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet,
                        leo
                        auctor volutpat
                        ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
                    <h4><span className="primary-color text-capitalize mb-3 mt-5">Master's degree in design</span>, 2015
                    </h4>
                    <p>Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat,
                        ornare
                        eget tristique
                        vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus
                        sem
                        id massa semper
                        ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet,
                        leo
                        auctor volutpat
                        ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
                </div>
            </div>
        </section>
        {/* <!-- Team single area end here --> */}
    </main>
    </>
  )
}
export default VolunteerSingle;
