import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const ScholarshipProgramme = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Ashok ",
      job: " Asst. Manager",
      image: "/images/testimonial/continuous5.jpg",
      text: '"I used to just lurk around here and there and after joining this course I finally started realising the importance of jobs. Now I just don’t feel like leaving my workplace, I enjoy it to the fullest." – Ashok, works with Banaras ( Pan Parlour) as Asst. Manager. '
    },
    {
      name: "Laxmi ",
      job: "Scholarship Programme",
      image: "/images/testimonial/employee.jpg",
      text: "'This scholarship program has directed me towards my goals and has given me a new life' – Laxmi Haldar, pursuing a BSE program from Institute of Hotel Management, Panipat, supported by Joining Hands Higher Education Scholarship Programme."
    },
    {
      name: "Niveditha ",
      job: "Scholarship Programme",
      image: "/images/testimonial/extended.jpg",
      text: "I am very grateful to Joining Hands for providing me this opportunity to fulfil my dreams. In this scholarship programme you are not only giving financial support, but you are also conducting mentorship programme which provides career guidance sessions and trains us in life skills and soft skills. In the future, if I become a successful person, I will do my bit and will give back to the society - Niveditha, pursuing B. Sc course at BGS Science Academy, Chickballapur, Karnataka, supported by Joining Hands Higher Education Scholarship Programme."
    },
    {
      name: "Kavya",
      job: "Competent Software ",
      image: "/images/testimonial/identification.jpg",
      text: "“The Centre has helped build my confidence and attend many interviews. Each teacher has a special connect with the students which has helped me a lot in my studies.” – Kavya, Competent Software "
    },
    {
      name: "Archana",
      job: "Software Developer",
      image: "/images/testimonial/individual_education.jpg",
      text: "Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    },
   
  ];

  return (
    <section className="testimonial-area pt-120 pb-120 ">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 mb-60">
          <div className="section-header">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            <i class="fa-regular fa-angles-left pe-1"></i>Joining hands Higher education Scholarship programme <i
                                class="fa-regular fa-angles-right ps-1"></i>
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">

This initiative will be carried in five phases to have more effectiveness.
   </h2>
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
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
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
        breakpoints={{
          640: { slidesPerView: 1.6 },
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 3.2 },
          // 1280: { slidesPerView: 3.5 }
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial__item ">
                <div className='image_box'>
                    <img style={{width: "100%", height:"100%"}} src={testimonial.image} alt={testimonial.name}/>
                </div>
            
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ScholarshipProgramme;