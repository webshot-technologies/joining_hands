import React from 'react'

export const Error404 = () => {
  return (
    <>
    <div id="targetElement" class="sidebar-area sidebar__hide">
        <div class="sidebar__overlay"></div>
        <a href="index.html" class="logo mb-40">
            <img src="/images/logo/logo-light.svg" alt="logo"/>
        </a>
        <div class="mobile-menu overflow-hidden"></div>
        <ul class="info pt-40">
            <li><i class="fa-solid primary-color fa-location-dot"></i> <a href="#0">example@example.com</a>
            </li>
            <li class="py-2"><i class="fa-solid primary-color fa-phone-volume"></i> <a
                    href="tel:+208-6666-0112">+208-6666-0112</a>
            </li>
            <li><i class="fa-solid primary-color fa-paper-plane"></i> <a href="#0">info@example.com</a></li>
        </ul>
        <div class="social-icon mt-20">
            <a href="#0"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#0"><i class="fa-brands fa-twitter"></i></a>
            <a href="#0"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#0"><i class="fa-brands fa-pinterest-p"></i></a>
        </div>
        <button id="closeButton" class="text-white"><i class="fa-solid fa-xmark"></i></button>
    </div>
    {/* <!-- Sidebar area end here --> */}

    <main>
        {/* <!-- Page banner area start here --> */}
        <section class="banner__inner-page bg-image pt-160 pb-160 bg-image" style={{backgroundImage:"url('/images/banner/banner-inner-page.jpg')"}}
            >
            <div class="container">
                <h2 class="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Page Not Found</h2>
                <div class="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i class="fa-regular fa-angles-right mx-2"></i>404</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Error area start here --> */}
        <section class="error-area pt-120 pb-120">
            <div class="container">
                <div class="error__item">
                    <div class="image mb-60">
                        <img src="/images/error/404.png" alt="image"/>
                    </div>
                    <h2>Whoops! This Page got Lost
                        in converstion</h2>
                    <div class="btn-two mt-50">
                        <span class="btn-circle">
                        </span>
                        <a href="index.html" class="btn-inner">
                            <span class="btn-text">
                                GO BACK HOME
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Error area end here --> */}
    </main>
    </>
  )
}
export default Error404;
