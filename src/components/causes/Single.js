import React from 'react'

export const Single = () => {
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
                <h2 class="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Causes Single</h2>
                <div class="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span><i class="fa-regular fa-angles-right mx-2"></i>Causes
                        Single</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Blog single area start here --> */}
        <section class="blog-single-area pt-120 pb-120">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-8 order-2 order-lg-1">
                        <div class="blog__item blog-single__left-item shadow-none">
                            <div class="image">
                                <img src="/images/cause/cause-single-image.jpg" alt="image"/>
                            </div>
                            <div class="progress-area px-4 pb-4 pt-35 bor border-top-0">
                                <div class="progress__item">
                                    <div class="progress__content" style={{width: "80%"}}><span>80%</span></div>
                                </div>
                                <div class="progress__goal mt-15">
                                    <h6>Goal : <span>$40.000</span></h6>
                                    <h6>Raised : <span>$35.000</span></h6>
                                </div>
                            </div>
                            <div class="blog__content p-0">
                                <h4 class="mt-20 mb-20 fs-30">Rebecca's
                                    New
                                    Album
                                    Aid
                                    for the Needy</h4>
                                <p class="mb-20 mt-20">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore of magna aliqua. Ut enim ad minim
                                    veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea dolor commodo consequat. Duis
                                    aute irure and dolor in reprehenderit.</p>
                                <p class="mb-20">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend
                                    porta arcu In hac habitasse the is platea augue
                                    thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat
                                    eros sed istincidunt augue ac ante
                                    rutrum sed the is sodales augue consequat.</p>
                                <h4 class="fs-30 mb-20">Our Challenge</h4>
                                <p class="mb-20">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet.
                                    Donec quis
                                    convallis neque. In id lacus pulvinar
                                    lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in.
                                    Sed a massa eget lacus consequat
                                    auctor.</p>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="image">
                                            <img src="/images/blog/blog-single-sm1.jpg" alt="image"/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="image">
                                            <img src="/images/blog/blog-single-sm2.jpg" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-20">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend
                                    porta arcu In hac habitasse the is platea augue
                                    thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat
                                    eros sed istincidunt augue ac ante
                                    rutrum sed the is sodales augue consequat.</p>
                                <div class="hilight-text mt-40 mb-30 sub-bg">
                                    <p>Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel
                                        ultricies urnacondimentum, sapien neque
                                        lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit
                                        amet
                                        est vehicula.</p>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09253H0V20.3698Z"
                                            fill="#F74F22" />
                                        <path
                                            d="M20.5703 5.09253V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09253H20.5703Z"
                                            fill="#F74F22" />
                                    </svg>

                                </div>
                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of
                                    magna aliqua. Ut enim ad minim
                                    veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea dolor commodo consequat. Duis
                                    aute irure and dolor in reprehenderit.</p>
                            </div>
                        </div>
                        <div class="blog-single__review shadow p-4 mt-60">
                            <div class="donation-amount-area">
                                <div class="input-box pb-30 bor-bottom mb-30">
                                    <span>$</span>
                                    <input class="addAmount-value" type="text" value="$250"/>
                                </div>
                                <div class="amount-group mb-40">
                                    <button class="amount-btn">$99</button>
                                    <button class="amount-btn">$125</button>
                                    <button class="active amount-btn">$250</button>
                                    <button class="amount-btn">$350</button>
                                    <button class="amount-btn custom-amount">Custom Amount</button>
                                </div>
                                <h3 class="mb-30">Select payment Method</h3>
                                <div class="payment-btns">
                                    <button class="payment-btn">Test Donation</button>
                                    <button class="payment-btn">Offline Donation</button>
                                    <button class="payment-btn">Credit Cart</button>
                                </div>
                            </div>
                            <div class="contact__form">
                                <h3 class="fw-700 mb-30 mt-40">Personal Information</h3>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="name">Fast Name*</label>
                                            <input id="name" class="bg-transparent bor" type="text"
                                                placeholder="Fast Name"/>
                                        </div>
                                        <div class="col-6">
                                            <label for="last-name">Last Name*</label>
                                            <input class="bg-transparent bor" id="last-name" type="text"
                                                placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="name">Email Address*</label>
                                            <input id="email" class="bg-transparent bor" type="email"
                                                placeholder="Email Address"/>
                                        </div>
                                        <div class="col-6">
                                            <label for="amount">Donation Total*</label>
                                            <input class="bg-transparent addAmount-value bor" id="amount" value="$250"
                                                type="text"/>
                                        </div>
                                    </div>
                                    <div class="btn-two">
                                        <span class="btn-circle">
                                        </span>
                                        <a href="#" class="btn-inner">
                                            <span class="btn-text">
                                                Donate Now
                                            </span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 order-1 order-lg-2">
                        <div class="blog-single__right-item">
                            <div class="item shadow mb-30">
                                <h5 class="title">Search</h5>
                                <div class="serach-bar">
                                    <input type="text" placeholder="Search here"/>
                                    <button><i class="fa-regular fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                            <div class="item shadow mb-30">
                                <h5 class="title">Category</h5>
                                <ul class="category">
                                    <li><a href="#0">Kids In Africa</a> <span>(2)</span></li>
                                    <li><a href="#0">Medical & Health</a> <span>(5)</span></li>
                                    <li><a href="#0">Donation</a> <span>(7)</span></li>
                                    <li><a href="#0">Water & Foods</a> <span>(8)</span></li>
                                </ul>
                            </div>
                            <div class="item shadow">
                                <h5 class="title">Resent Post</h5>
                                <ul class="single-post">
                                    <li>
                                        <img src="/images/blog/post-sm1.png" alt="image"/>
                                        <div class="con">
                                            <h6><a href="blog-single.html" class="primary-hover">More with elements
                                                    all for one low</a></h6>
                                            <span>20 Nov, 2023</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/images/blog/post-sm2.png" alt="image"/>
                                        <div class="con">
                                            <h6><a href="blog-single.html" class="primary-hover">Rebecca’s Charity Album
                                                    A Brilliant Display</a></h6>
                                            <span>20 Nov, 2023</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/images/blog/post-sm3.png" alt="image"/>
                                        <div class="con">
                                            <h6><a href="blog-single.html" class="primary-hover">Provide Healthy Meals
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
export default Single;
