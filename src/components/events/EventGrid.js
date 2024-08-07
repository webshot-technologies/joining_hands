import React from 'react'

export const EventGrid = () => {
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
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Event Grid</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i className="fa-regular fa-angles-right mx-2"></i>Event Grid</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Event area start here --> */}
        <section className="event-area pt-120 pb-120">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="event__inner-item">
                            <div className="image">
                                <img src="/images/blog/blog-image6.jpg" alt="image"/>
                                <span className="blog-tag">22, Nov 2023</span>
                            </div>
                            <div className="blog__content pt-4">
                                <ul>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_219_65)">
                                                <path
                                                    d="M7.5 9.16669C7.5 9.82973 7.76339 10.4656 8.23223 10.9345C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9345C12.2366 10.4656 12.5 9.82973 12.5 9.16669C12.5 8.50365 12.2366 7.86776 11.7678 7.39892C11.2989 6.93008 10.663 6.66669 10 6.66669C9.33696 6.66669 8.70107 6.93008 8.23223 7.39892C7.76339 7.86776 7.5 8.50365 7.5 9.16669Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M14.7148 13.8808L11.179 17.4167C10.8665 17.7289 10.4428 17.9042 10.0011 17.9042C9.55933 17.9042 9.13567 17.7289 8.82315 17.4167L5.28649 13.8808C4.35417 12.9485 3.71927 11.7606 3.46206 10.4674C3.20485 9.17419 3.3369 7.83376 3.84149 6.61561C4.34608 5.39745 5.20057 4.35628 6.29689 3.62376C7.39321 2.89123 8.68213 2.50024 10.0007 2.50024C11.3192 2.50024 12.6081 2.89123 13.7044 3.62376C14.8007 4.35628 15.6552 5.39745 16.1598 6.61561C16.6644 7.83376 16.7965 9.17419 16.5392 10.4674C16.282 11.7606 15.6471 12.9485 14.7148 13.8808Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <a href="blog-single.html"><span className="primary-hover transition">New
                                                york,
                                                USA</span></a>
                                    </li>
                                    <li>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.8846 11.1778L10.2354 9.191V5.14378C10.2354 4.73684 9.90649 4.4079 9.49955 4.4079C9.09261 4.4079 8.76367 4.73684 8.76367 5.14378V9.55898C8.76367 9.79076 8.87259 10.0093 9.05802 10.1477L12.0015 12.3553C12.1285 12.4509 12.2832 12.5026 12.4422 12.5025C12.6667 12.5025 12.8875 12.4016 13.0317 12.2074C13.2761 11.8828 13.2098 11.4214 12.8846 11.1778Z"
                                                fill="#F74F22" />
                                            <path
                                                d="M9.5 0C4.26138 0 0 4.26138 0 9.5C0 14.7386 4.26138 19 9.5 19C14.7386 19 19 14.7386 19 9.5C19 4.26138 14.7386 0 9.5 0ZM9.5 17.5283C5.07378 17.5283 1.47172 13.9262 1.47172 9.5C1.47172 5.07378 5.07378 1.47172 9.5 1.47172C13.927 1.47172 17.5283 5.07378 17.5283 9.5C17.5283 13.9262 13.9262 17.5283 9.5 17.5283Z"
                                                fill="#F74F22" />
                                        </svg>
                                        <span>09:00 PM</span>
                                    </li>
                                </ul>
                                <h4 className="mt-15 mb-15"><a href="event-single.html" className="primary-hover">Rebecca's
                                        New
                                        Album
                                        Aid
                                        for the Needy</a></h4>
                                <p>Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat</p>
                                <a className="mt-4 read-more fw-bold transition" href="event-single.html">EXPLORE MORE <i
                                        className="fa-solid fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="event__inner-item">
                            <div className="image">
                                <img src="/images/blog/blog-image5.jpg" alt="image"/>
                                <span className="blog-tag">22, Nov 2023</span>
                            </div>
                            <div className="blog__content pt-4">
                                <ul>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_219_65)">
                                                <path
                                                    d="M7.5 9.16669C7.5 9.82973 7.76339 10.4656 8.23223 10.9345C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9345C12.2366 10.4656 12.5 9.82973 12.5 9.16669C12.5 8.50365 12.2366 7.86776 11.7678 7.39892C11.2989 6.93008 10.663 6.66669 10 6.66669C9.33696 6.66669 8.70107 6.93008 8.23223 7.39892C7.76339 7.86776 7.5 8.50365 7.5 9.16669Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M14.7148 13.8808L11.179 17.4167C10.8665 17.7289 10.4428 17.9042 10.0011 17.9042C9.55933 17.9042 9.13567 17.7289 8.82315 17.4167L5.28649 13.8808C4.35417 12.9485 3.71927 11.7606 3.46206 10.4674C3.20485 9.17419 3.3369 7.83376 3.84149 6.61561C4.34608 5.39745 5.20057 4.35628 6.29689 3.62376C7.39321 2.89123 8.68213 2.50024 10.0007 2.50024C11.3192 2.50024 12.6081 2.89123 13.7044 3.62376C14.8007 4.35628 15.6552 5.39745 16.1598 6.61561C16.6644 7.83376 16.7965 9.17419 16.5392 10.4674C16.282 11.7606 15.6471 12.9485 14.7148 13.8808Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <a href="blog-single.html"><span className="primary-hover transition">New
                                                york,
                                                USA</span></a>
                                    </li>
                                    <li>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.8846 11.1778L10.2354 9.191V5.14378C10.2354 4.73684 9.90649 4.4079 9.49955 4.4079C9.09261 4.4079 8.76367 4.73684 8.76367 5.14378V9.55898C8.76367 9.79076 8.87259 10.0093 9.05802 10.1477L12.0015 12.3553C12.1285 12.4509 12.2832 12.5026 12.4422 12.5025C12.6667 12.5025 12.8875 12.4016 13.0317 12.2074C13.2761 11.8828 13.2098 11.4214 12.8846 11.1778Z"
                                                fill="#F74F22" />
                                            <path
                                                d="M9.5 0C4.26138 0 0 4.26138 0 9.5C0 14.7386 4.26138 19 9.5 19C14.7386 19 19 14.7386 19 9.5C19 4.26138 14.7386 0 9.5 0ZM9.5 17.5283C5.07378 17.5283 1.47172 13.9262 1.47172 9.5C1.47172 5.07378 5.07378 1.47172 9.5 1.47172C13.927 1.47172 17.5283 5.07378 17.5283 9.5C17.5283 13.9262 13.9262 17.5283 9.5 17.5283Z"
                                                fill="#F74F22" />
                                        </svg>
                                        <span>09:00 PM</span>
                                    </li>
                                </ul>
                                <h4 className="mt-15 mb-15"><a href="event-single.html" className="primary-hover">Rebecca's
                                        Charity Album A Brilliant.</a></h4>
                                <p>Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat</p>
                                <a className="mt-4 read-more fw-bold transition" href="event-single.html">EXPLORE MORE <i
                                        className="fa-solid fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="event__inner-item">
                            <div className="image">
                                <img src="/images/blog/blog-image4.jpg" alt="image"/>
                                <span className="blog-tag">22, Nov 2023</span>
                            </div>
                            <div className="blog__content pt-4">
                                <ul>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_219_65)">
                                                <path
                                                    d="M7.5 9.16669C7.5 9.82973 7.76339 10.4656 8.23223 10.9345C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9345C12.2366 10.4656 12.5 9.82973 12.5 9.16669C12.5 8.50365 12.2366 7.86776 11.7678 7.39892C11.2989 6.93008 10.663 6.66669 10 6.66669C9.33696 6.66669 8.70107 6.93008 8.23223 7.39892C7.76339 7.86776 7.5 8.50365 7.5 9.16669Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M14.7148 13.8808L11.179 17.4167C10.8665 17.7289 10.4428 17.9042 10.0011 17.9042C9.55933 17.9042 9.13567 17.7289 8.82315 17.4167L5.28649 13.8808C4.35417 12.9485 3.71927 11.7606 3.46206 10.4674C3.20485 9.17419 3.3369 7.83376 3.84149 6.61561C4.34608 5.39745 5.20057 4.35628 6.29689 3.62376C7.39321 2.89123 8.68213 2.50024 10.0007 2.50024C11.3192 2.50024 12.6081 2.89123 13.7044 3.62376C14.8007 4.35628 15.6552 5.39745 16.1598 6.61561C16.6644 7.83376 16.7965 9.17419 16.5392 10.4674C16.282 11.7606 15.6471 12.9485 14.7148 13.8808Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <a href="blog-single.html"><span className="primary-hover transition">New
                                                york,
                                                USA</span></a>
                                    </li>
                                    <li>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.8846 11.1778L10.2354 9.191V5.14378C10.2354 4.73684 9.90649 4.4079 9.49955 4.4079C9.09261 4.4079 8.76367 4.73684 8.76367 5.14378V9.55898C8.76367 9.79076 8.87259 10.0093 9.05802 10.1477L12.0015 12.3553C12.1285 12.4509 12.2832 12.5026 12.4422 12.5025C12.6667 12.5025 12.8875 12.4016 13.0317 12.2074C13.2761 11.8828 13.2098 11.4214 12.8846 11.1778Z"
                                                fill="#F74F22" />
                                            <path
                                                d="M9.5 0C4.26138 0 0 4.26138 0 9.5C0 14.7386 4.26138 19 9.5 19C14.7386 19 19 14.7386 19 9.5C19 4.26138 14.7386 0 9.5 0ZM9.5 17.5283C5.07378 17.5283 1.47172 13.9262 1.47172 9.5C1.47172 5.07378 5.07378 1.47172 9.5 1.47172C13.927 1.47172 17.5283 5.07378 17.5283 9.5C17.5283 13.9262 13.9262 17.5283 9.5 17.5283Z"
                                                fill="#F74F22" />
                                        </svg>
                                        <span>09:00 PM</span>
                                    </li>
                                </ul>
                                <h4 className="mt-15 mb-15"><a href="event-single.html" className="primary-hover">A Nation's
                                        Benevolence Displayed</a></h4>
                                <p>Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat</p>
                                <a className="mt-4 read-more fw-bold transition" href="event-single.html">EXPLORE MORE <i
                                        className="fa-solid fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="event__inner-item">
                            <div className="image">
                                <img src="/images/blog/blog-image3.jpg" alt="image"/>
                                <span className="blog-tag">22, Nov 2023</span>
                            </div>
                            <div className="blog__content pt-4">
                                <ul>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_219_65)">
                                                <path
                                                    d="M7.5 9.16669C7.5 9.82973 7.76339 10.4656 8.23223 10.9345C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9345C12.2366 10.4656 12.5 9.82973 12.5 9.16669C12.5 8.50365 12.2366 7.86776 11.7678 7.39892C11.2989 6.93008 10.663 6.66669 10 6.66669C9.33696 6.66669 8.70107 6.93008 8.23223 7.39892C7.76339 7.86776 7.5 8.50365 7.5 9.16669Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M14.7148 13.8808L11.179 17.4167C10.8665 17.7289 10.4428 17.9042 10.0011 17.9042C9.55933 17.9042 9.13567 17.7289 8.82315 17.4167L5.28649 13.8808C4.35417 12.9485 3.71927 11.7606 3.46206 10.4674C3.20485 9.17419 3.3369 7.83376 3.84149 6.61561C4.34608 5.39745 5.20057 4.35628 6.29689 3.62376C7.39321 2.89123 8.68213 2.50024 10.0007 2.50024C11.3192 2.50024 12.6081 2.89123 13.7044 3.62376C14.8007 4.35628 15.6552 5.39745 16.1598 6.61561C16.6644 7.83376 16.7965 9.17419 16.5392 10.4674C16.282 11.7606 15.6471 12.9485 14.7148 13.8808Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <a href="blog-single.html"><span className="primary-hover transition">New
                                                york,
                                                USA</span></a>
                                    </li>
                                    <li>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.8846 11.1778L10.2354 9.191V5.14378C10.2354 4.73684 9.90649 4.4079 9.49955 4.4079C9.09261 4.4079 8.76367 4.73684 8.76367 5.14378V9.55898C8.76367 9.79076 8.87259 10.0093 9.05802 10.1477L12.0015 12.3553C12.1285 12.4509 12.2832 12.5026 12.4422 12.5025C12.6667 12.5025 12.8875 12.4016 13.0317 12.2074C13.2761 11.8828 13.2098 11.4214 12.8846 11.1778Z"
                                                fill="#F74F22" />
                                            <path
                                                d="M9.5 0C4.26138 0 0 4.26138 0 9.5C0 14.7386 4.26138 19 9.5 19C14.7386 19 19 14.7386 19 9.5C19 4.26138 14.7386 0 9.5 0ZM9.5 17.5283C5.07378 17.5283 1.47172 13.9262 1.47172 9.5C1.47172 5.07378 5.07378 1.47172 9.5 1.47172C13.927 1.47172 17.5283 5.07378 17.5283 9.5C17.5283 13.9262 13.9262 17.5283 9.5 17.5283Z"
                                                fill="#F74F22" />
                                        </svg>
                                        <span>09:00 PM</span>
                                    </li>
                                </ul>
                                <h4 className="mt-15 mb-15"><a href="event-single.html" className="primary-hover">Rebecca's
                                        Charity Showcases Nation's</a></h4>
                                <p>Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat</p>
                                <a className="mt-4 read-more fw-bold transition" href="event-single.html">EXPLORE MORE <i
                                        className="fa-solid fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="event__inner-item">
                            <div className="image">
                                <img src="/images/blog/blog-image2.jpg" alt="image"/>
                                <span className="blog-tag">22, Nov 2023</span>
                            </div>
                            <div className="blog__content pt-4">
                                <ul>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_219_65)">
                                                <path
                                                    d="M7.5 9.16669C7.5 9.82973 7.76339 10.4656 8.23223 10.9345C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9345C12.2366 10.4656 12.5 9.82973 12.5 9.16669C12.5 8.50365 12.2366 7.86776 11.7678 7.39892C11.2989 6.93008 10.663 6.66669 10 6.66669C9.33696 6.66669 8.70107 6.93008 8.23223 7.39892C7.76339 7.86776 7.5 8.50365 7.5 9.16669Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M14.7148 13.8808L11.179 17.4167C10.8665 17.7289 10.4428 17.9042 10.0011 17.9042C9.55933 17.9042 9.13567 17.7289 8.82315 17.4167L5.28649 13.8808C4.35417 12.9485 3.71927 11.7606 3.46206 10.4674C3.20485 9.17419 3.3369 7.83376 3.84149 6.61561C4.34608 5.39745 5.20057 4.35628 6.29689 3.62376C7.39321 2.89123 8.68213 2.50024 10.0007 2.50024C11.3192 2.50024 12.6081 2.89123 13.7044 3.62376C14.8007 4.35628 15.6552 5.39745 16.1598 6.61561C16.6644 7.83376 16.7965 9.17419 16.5392 10.4674C16.282 11.7606 15.6471 12.9485 14.7148 13.8808Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <a href="blog-single.html"><span className="primary-hover transition">New
                                                york,
                                                USA</span></a>
                                    </li>
                                    <li>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.8846 11.1778L10.2354 9.191V5.14378C10.2354 4.73684 9.90649 4.4079 9.49955 4.4079C9.09261 4.4079 8.76367 4.73684 8.76367 5.14378V9.55898C8.76367 9.79076 8.87259 10.0093 9.05802 10.1477L12.0015 12.3553C12.1285 12.4509 12.2832 12.5026 12.4422 12.5025C12.6667 12.5025 12.8875 12.4016 13.0317 12.2074C13.2761 11.8828 13.2098 11.4214 12.8846 11.1778Z"
                                                fill="#F74F22" />
                                            <path
                                                d="M9.5 0C4.26138 0 0 4.26138 0 9.5C0 14.7386 4.26138 19 9.5 19C14.7386 19 19 14.7386 19 9.5C19 4.26138 14.7386 0 9.5 0ZM9.5 17.5283C5.07378 17.5283 1.47172 13.9262 1.47172 9.5C1.47172 5.07378 5.07378 1.47172 9.5 1.47172C13.927 1.47172 17.5283 5.07378 17.5283 9.5C17.5283 13.9262 13.9262 17.5283 9.5 17.5283Z"
                                                fill="#F74F22" />
                                        </svg>
                                        <span>09:00 PM</span>
                                    </li>
                                </ul>
                                <h4 className="mt-15 mb-15"><a href="event-single.html" className="primary-hover">Rebecca's
                                        Album Supports Needy</a></h4>
                                <p>Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat</p>
                                <a className="mt-4 read-more fw-bold transition" href="event-single.html">EXPLORE MORE <i
                                        className="fa-solid fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="event__inner-item">
                            <div className="image">
                                <img src="/images/blog/blog-image1.jpg" alt="image"/>
                                <span className="blog-tag">22, Nov 2023</span>
                            </div>
                            <div className="blog__content pt-4">
                                <ul>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_219_65)">
                                                <path
                                                    d="M7.5 9.16669C7.5 9.82973 7.76339 10.4656 8.23223 10.9345C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9345C12.2366 10.4656 12.5 9.82973 12.5 9.16669C12.5 8.50365 12.2366 7.86776 11.7678 7.39892C11.2989 6.93008 10.663 6.66669 10 6.66669C9.33696 6.66669 8.70107 6.93008 8.23223 7.39892C7.76339 7.86776 7.5 8.50365 7.5 9.16669Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M14.7148 13.8808L11.179 17.4167C10.8665 17.7289 10.4428 17.9042 10.0011 17.9042C9.55933 17.9042 9.13567 17.7289 8.82315 17.4167L5.28649 13.8808C4.35417 12.9485 3.71927 11.7606 3.46206 10.4674C3.20485 9.17419 3.3369 7.83376 3.84149 6.61561C4.34608 5.39745 5.20057 4.35628 6.29689 3.62376C7.39321 2.89123 8.68213 2.50024 10.0007 2.50024C11.3192 2.50024 12.6081 2.89123 13.7044 3.62376C14.8007 4.35628 15.6552 5.39745 16.1598 6.61561C16.6644 7.83376 16.7965 9.17419 16.5392 10.4674C16.282 11.7606 15.6471 12.9485 14.7148 13.8808Z"
                                                    stroke="#F74F22" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <a href="blog-single.html"><span className="primary-hover transition">New
                                                york,
                                                USA</span></a>
                                    </li>
                                    <li>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.8846 11.1778L10.2354 9.191V5.14378C10.2354 4.73684 9.90649 4.4079 9.49955 4.4079C9.09261 4.4079 8.76367 4.73684 8.76367 5.14378V9.55898C8.76367 9.79076 8.87259 10.0093 9.05802 10.1477L12.0015 12.3553C12.1285 12.4509 12.2832 12.5026 12.4422 12.5025C12.6667 12.5025 12.8875 12.4016 13.0317 12.2074C13.2761 11.8828 13.2098 11.4214 12.8846 11.1778Z"
                                                fill="#F74F22" />
                                            <path
                                                d="M9.5 0C4.26138 0 0 4.26138 0 9.5C0 14.7386 4.26138 19 9.5 19C14.7386 19 19 14.7386 19 9.5C19 4.26138 14.7386 0 9.5 0ZM9.5 17.5283C5.07378 17.5283 1.47172 13.9262 1.47172 9.5C1.47172 5.07378 5.07378 1.47172 9.5 1.47172C13.927 1.47172 17.5283 5.07378 17.5283 9.5C17.5283 13.9262 13.9262 17.5283 9.5 17.5283Z"
                                                fill="#F74F22" />
                                        </svg>
                                        <span>09:00 PM</span>
                                    </li>
                                </ul>
                                <h4 className="mt-15 mb-15"><a href="event-single.html" className="primary-hover">Rebecca's
                                        New
                                        Album
                                        Aid
                                        for the Needy</a></h4>
                                <p>Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat</p>
                                <a className="mt-4 read-more fw-bold transition" href="event-single.html">EXPLORE MORE <i
                                        className="fa-solid fa-arrow-right ms-1"></i></a>
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
    </main>
    </>
  )
}
export default EventGrid;
