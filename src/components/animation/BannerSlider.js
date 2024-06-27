import React, { useEffect, useRef, useCallback } from 'react';
import Swiper from 'swiper';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const BannerSlider = () => {
  const swiperRef = useRef(null);

  const animateElements = useCallback(() => {
    const elements = document.querySelectorAll('.banner-two__slider [data-animation]');
    elements.forEach((el) => {
      const anim = el.dataset.animation;
      const delay = el.dataset.delay;
      const duration = el.dataset.duration;

      el.classList.remove(`anim${anim}`);
      el.classList.add(anim, 'animated');
      el.style.animationDelay = delay;
      el.style.animationDuration = duration;

      const handleAnimationEnd = () => {
        el.classList.remove(anim, 'animated');
        el.removeEventListener('animationend', handleAnimationEnd);
      };

      el.addEventListener('animationend', handleAnimationEnd);
    });
  }, []);

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

    animateElements();

    swiper.on('slideChange', () => {
      document.querySelectorAll('.banner-two__slider [data-animation]').forEach(el => {
        el.classList.remove('animated');
      });
      animateElements();
    });

    return () => swiper.destroy();
  }, [animateElements]);

  const slides = [
    {
      image: '/images/banner/banner-1.webp',
      title: 'Support Kids & Elders',
      subtitle: 'Give Generously'
    },
    {
      image: '/images/banner/slider-2.jpg',
      title: 'Support Kids & Elders',
      subtitle: 'Give Generously'
    },
    {
      image: '/images/banner/slider-3.jpg',
      title: 'Support Kids & Elders',
      subtitle: 'Give Generously'
    },
    {
      image: '/images/banner/slider-4.jpg',
      title: 'Support Kids & Elders',
      subtitle: 'Give Generously'
    }
  ];

  return (
    <section className="banner-two-area">
      <div className="swiper banner-two__slider" ref={swiperRef}>
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="slide-bg" style={{backgroundImage: `url('${slide.image}')`}}></div>
              <div className="container">
                <div className="banner-two__content">
                  <h4 className="" data-animation="fadeInUp" data-delay=".3s">Change The World Together</h4>
                  <h1 data-animation="fadeInUp" data-delay=".5s">{slide.title} <br /> {slide.subtitle}</h1>
                  <div className="btn-one mt-50" data-animation="fadeInUp" data-delay="1s">
                    <span className="btn-circle"></span>
                    <a href="cause-single.html" className="btn-inner">
                      <span className="btn-text">DONATE NOW</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        {['facebook-f', 'twitter', 'linkedin-in'].map((icon, index) => (
          <li key={icon}>
            <a href="#0" className={index === 1 ? 'active' : ''}>
              <i className={`fa-brands fa-${icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
      <div className="banner-two__shape wow slideInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
        <img className="banner__line__animation" src="/images/shape/banner-line.png" alt="shape" />
      </div>
    </section>
  );
};

export default BannerSlider;