import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const BannerSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, EffectFade, Autoplay],
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 3000,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner-two__arry-next",
        prevEl: ".banner-two__arry-prev",
      },
    });

    const animated = () => {
      const elements = document.querySelectorAll('.banner-two__slider [data-animation]');
      elements.forEach((el) => {
        const anim = el.getAttribute('data-animation');
        const delay = el.getAttribute('data-delay');
        const duration = el.getAttribute('data-duration');

        el.classList.remove('anim' + anim);
        el.classList.add(anim, 'animated');
        el.style.animationDelay = delay;
        el.style.animationDuration = duration;

        el.addEventListener('animationend', () => {
          el.classList.remove(anim, 'animated');
        }, { once: true });
      });
    };

    animated();

    swiper.on('slideChange', () => {
      document.querySelectorAll('.banner-two__slider [data-animation]').forEach(el => {
        el.classList.remove('animated');
      });
    });

    swiper.on('slideChange', animated);

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="banner-two-area">
      <div className="swiper banner-two__slider" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slide-bg" style={{backgroundImage: "url('/images/banner/banner-image1.jpg')"}}></div>
            <div className="container">
              <div className="banner-two__content">
                <h4 data-animation="fadeInUp" data-delay=".3s">Change The World Together</h4>
                <h1 data-animation="fadeInUp" data-delay=".5s">Support Kids & Elders <br /> Give Generously</h1>
                <div className="btn-one mt-50" data-animation="fadeInUp" data-delay="1s">
                  <span className="btn-circle"></span>
                  <a href="cause-single.html" className="btn-inner">
                    <span className="btn-text">DONATE NOW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-bg" style={{backgroundImage: "url('/images/banner/banner-image2.jpg')"}}></div>
            <div className="container">
              <div className="banner-two__content">
                <h4 data-animation="fadeInUp" data-delay=".3s">Change The World Together</h4>
                <h1 data-animation="fadeInUp" data-delay=".5s">Support Kids & Elders <br /> Give Generously</h1>
                <div className="btn-one mt-50" data-animation="fadeInUp" data-delay="1s">
                  <span className="btn-circle"></span>
                  <a href="cause-single.html" className="btn-inner">
                    <span className="btn-text">DONATE NOW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-two__arry-btn">
        <button className="arry-prev mb-15 banner-two__arry-prev active">
          <i className="fa-light fa-chevron-left"></i>
        </button>
        <button className="arry-next banner-two__arry-next">
          <i className="fa-light fa-chevron-right"></i>
        </button>
      </div>
      <ul className="banner-two__social">
        <li><a href="#0"><i className="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="#0" className="active"><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href="#0"><i className="fa-brands fa-linkedin-in"></i></a></li>
      </ul>
      <div className="banner-two__shape wow slideInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
        <img className="banner__line__animation" src="/images/shape/banner-line.png" alt="shape" />
      </div>
    </section>
  );
};

export default BannerSlider;