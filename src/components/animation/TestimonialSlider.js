import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Esther Howard",
      job: "Dog Trainer",
      image: "/images/testimonial/testimonial-image1.png",
      text: "Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    },
    {
      name: "Esther Howard",
      job: "Dog Trainer",
      image: "/images/testimonial/testimonial-image1.png",
      text: "Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    },
    {
      name: "Esther Howard",
      job: "Dog Trainer",
      image: "/images/testimonial/testimonial-image1.png",
      text: "Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    },
    {
      name: "Esther Howard",
      job: "Dog Trainer",
      image: "/images/testimonial/testimonial-image1.png",
      text: "Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    },
    {
      name: "Annette Black",
      job: "Software Developer",
      image: "/images/testimonial/testimonial-image2.png",
      text: "Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    },
    {
      name: "Kristin Watson",
      job: "Team Leader",
      image: "/images/testimonial/testimonial-image3.png",
      text: "Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    },
    {
      name: "Ralph Edwards",
      job: "UI/UX Designer",
      image: "/images/testimonial/testimonial-image4.png",
      text: "Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    }
  ];

  return (
    <section className="testimonial-area pt-120 pb-120 sub-bg">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 mb-60">
          <div className="section-header">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            <i class="fa-regular fa-angles-left pe-1"></i> Testimonials <i
                                class="fa-regular fa-angles-right ps-1"></i>
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Why People Love Us</h2>
          </div>
          <div className="arry-btn wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          {/* <button  className="arry-prev testimonial__arry-prev">
          <i
                                class="fa-regular fa-chevron-left"></i>
            </button>
            <button  className="arry-next testimonial__arry-next active ml-10">
            <i
                                class="fa-regular fa-chevron-right"></i> 
            </button> */}
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial__item">
              <svg className="shape" width="59" height="67" viewBox="0 0 59 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="59" height="67">
                  <rect width="59" height="67" fill="#F74F22"/>
                </mask>
                <g mask="url(#mask0)">
                  <circle opacity="0.7" cx="59" cy="9" r="56" fill="#F74F22"/>
                  <circle cx="59" cy="9" r="47.5" fill="#F74F22" stroke="white" strokeDasharray="2 2"/>
                </g>
              </svg>
              <div className="top">
                <div className="image">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 28C30.625 28 32 26.625 32 25V10C32 4.4375 27.5 0 22 0H21.5C20.625 0 20 0.625 20 1.5V4.5C20 5.3125 20.625 6 21.5 6H22C24.1875 6 26 7.75 26 10V14H21C19.3125 14 18 15.3125 18 17V25C18 26.625 19.3125 28 21 28H29ZM11 28C12.625 28 14 26.625 14 25V10C14 4.4375 9.5 0 4 0H3.5C2.625 0 2 0.625 2 1.5V4.5C2 5.3125 2.625 6 3.5 6H4C6.1875 6 8 7.75 8 10V14H3C1.3125 14 0 15.3125 0 17V25C0 26.625 1.3125 28 3 28H11Z" fill="#F74F22"/>
                  </svg>
                </div>
                <div className="con">
                  <div className="star">
                  <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.job}</span>
                </div>
              </div>
              <p className="mt-30">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;