import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const BrandSlider = () => {
  const brands = [
    { id: 1, image: "images/brand/brand-image1.png" },
    { id: 2, image: "images/brand/brand-image2.png" },
    { id: 3, image: "images/brand/brand-image3.png" },
    { id: 4, image: "images/brand/brand-image4.png" },
    { id: 5, image: "images/brand/brand-image5.png" },
    { id: 6, image: "images/brand/brand-image5.png" },
    { id: 7, image: "images/brand/brand-image5.png" },
    { id: 8, image: "images/brand/brand-image5.png" },
    { id: 9, image: "images/brand/brand-image5.png" },
    { id: 10, image: "images/brand/brand-image5.png" },
  ];

  return (
    <div className="brand-area pt-100 pb-100 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          className="brand__slider"
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="image">
                <img src={brand.image} alt={`Brand ${brand.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;