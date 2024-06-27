import React from "react";
import "./Single.css";
import ScholarshipProgramme from "../animation/ScholarshipProgramme";

export const Single = () => {
  return (
    <>
      <div id="targetElement" class="sidebar-area sidebar__hide">
        <div class="sidebar__overlay"></div>
        <a href="index.html" class="logo mb-40">
          <img src="/images/logo/logo-light.svg" alt="logo" />
        </a>
        <div class="mobile-menu overflow-hidden"></div>
        <ul class="info pt-40">
          <li>
            <i class="fa-solid primary-color fa-location-dot"></i>{" "}
            <a href="#0">example@example.com</a>
          </li>
          <li class="py-2">
            <i class="fa-solid primary-color fa-phone-volume"></i>{" "}
            <a href="tel:+208-6666-0112">+208-6666-0112</a>
          </li>
          <li>
            <i class="fa-solid primary-color fa-paper-plane"></i>{" "}
            <a href="#0">info@example.com</a>
          </li>
        </ul>
        <div class="social-icon mt-20">
          <a href="#0">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#0">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#0">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#0">
            <i class="fa-brands fa-pinterest-p"></i>
          </a>
        </div>
        <button id="closeButton" class="text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      {/* <!-- Sidebar area end here --> */}

      <main>
        {/* <!-- Page banner area start here --> */}
        <section
          class="banner__inner-page bg-image pt-160 pb-160 bg-image"
          style={{ backgroundImage: "url('/images/banner/gallery.jpg')" }}
        >
          <div class="container">
            <h2
              class="wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              What We Do
            </h2>
            <div
              class="breadcrumb-list wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <a href="index.html">Home</a>
              <span  className='text-white'>
                <i class="fa-regular fa-angles-right mx-2"></i>What We Do Single
              </span>
            </div>
          </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Blog single area start here --> */}
        <section class="blog-single-area pt-50 pb-120">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-12 order-2 order-lg-1">
                <div class="blog__item blog-single__left-item shadow-none">
                  <div class="progress-area px-4 pb-4 pt-10  ">
                    <h2 className="text-center fw-bold">What We Do </h2>
                  </div>
                  <div class="blog__content p-0 mt-20 ">
                    {/* <h4 class="mt-20 mb-20  py-5 fs-30 fw-bold text-center">
                      Enhancing Employability
                    </h4> */}
                    <div className="row align-items-center ">
                      <div className="col-md-7 ">
                       <h4 class="mt-20   fs-30 fw-bold ">
                      Enhancing Employability
                    </h4>
                    <div className=" pr-30" >
                        <p class=" mb-2 mt-20  fw-500 text-justify">
                        With a focus on overall development, Joining Hands initiated a three months intensive training programme in the Badarpur area of New Delhi, where the youth is trained in basic skills such as computer literacy, English, life and soft skills. 
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                        We have developed a need based and a market oriented curriculum which has been further supported through guest lectures by industry professionals. With an attendance as high as 82%, the drop rate is as low as 4%. Till now, over 750 youth have been trained under this programme and we have been successful in placing over 70% in reputed organisations like Costa Coffee, KFC, Pizza Hut, Café Coffee Day, Marks & Spencer , Reliable Private Limited, Competent Software, Kidzania, Cinepolis, Big Bazar, PamacFinserv Private Limited, Nandos, Subway, Save the Children, CRY, SOS Village, Khushii, Concern India Foundation etc.
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                        With an average income of Rs. 10000 a month, they have become important contributors in their families both socially and financially. Some of them have also contributed towards the education of their siblings.
                        </p>
                        </div>
                      </div>
                      <div className="col-md-5 image_box ">
                        <img src="/images/blog/enhance-employ.jpg" alt="" />
                        {/* <span className="blog-tag">{tag}</span> */}
                      </div>
                    </div>
                  </div>
                  <div class="blog__content p-0">
                   
                    <div className="row align-items-center ">
                    <h4 class="mt-20  py-5 fs-30 fw-bold">
                      Skill Enhancement Programme
                    </h4>
                      <div className="col-md-5 image_box ">
                        <img src="/images/blog/skill-enhencement.jpg" alt="" />
                        {/* <span className="blog-tag">{tag}</span> */}
                      </div>
                      <div className="col-md-7  ">
                        <div className="pl-30">
                        <p class=" mb-2 mt-20  fw-500 text-justify">
                          According to the 2011 census Sixty-five percentages of
                          India’s 1.2 billion people are below the age of 35 and
                          by 2021 India is set to become the youngest country,
                          with an estimated youth population of 464 million.
                          However one of the biggest challenges faced by India
                          today is employment generation.{" "}
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                          Harnessing the demographic dividend through
                          appropriate skill development efforts would provide an
                          opportunity to achieve inclusion and productivity
                          within the country and also aid in bridging the skill
                          gap.
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                          But unfortunately a large part of this population is
                          on the brink of a very insecure future as the overall
                          marketable skill capital pool in India remains dismal.
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                          <strong>'Enhancing Employability'</strong> Programme
                          was conceptualized by <strong> Joining Hands,</strong>{" "}
                          to enhance skills of the less privileged youth and to
                          make them employable in the organised sector.
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="blog__content p-0">
                    <h4 class="mt-20 mb-20  py-5 fs-30 fw-semibold">
                    Hospitality skills development programme
                    </h4>
                    <div className="row align-items-center ">
                      <div className="col-md-7 ">
                        <p class=" mb-2 mt-20  fw-500 text-justify">
                        The ever growing hospitality sector has abundance of employment opportunities but at the same time a gap in availability of trained and skilled resources. Joining Hands, in collaboration with Le Meridian, New Delhi runs the Hospitality Skills Development programme for the less privileged girls. Through this fast track module on hotel operations training we equip the beneficiaries with skills that help them to get appropriate jobs in the hospitality sector. 
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                        By now we have trained around 50 such girls with placement rate of over 70%. Most of them have been placed in reputed restaurants/ hotels like Nandos, Aloft Hospitality, Sevelte Hospitality, Rockland Inn, Le Meridien Gurgaon, Subway, Costa Coffee, Café Coffee Day, KFC etc.
                        </p>
                       
                      </div>
                      <div className="col-md-5 image_box ">
                        <img src="/images/blog/hospitality-infographic.jpg" alt="" />
                        {/* <span className="blog-tag">{tag}</span> */}
                      </div>
                    </div>
                  </div>

                  <div class="blog__content p-0 mt-10">
                   
                    <div className="row align-items-center ">
                      <div className="col-md-7 ">
                      <h4 class=" py-3 fs-30 fw-bold ">
                    Higher Education Scholarship Programme 
                    </h4>
                    <div className="pr-30">
                        <p class=" mb-2 mt-20  fw-500 text-justify">
                        While reaching out to the youth for the Skill Enhancement programme, Joining Hands came across the challenges faced by meritorious less-privileged students who are keen on pursuing higher education but do not have the financial resources to do so. 
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                        oining Hands expanded its outreach by initiating the Higher Education Scholarship Programme in association with Cadence Design Systems IPL. This programme facilitates the higher education of less privileged students by sponsoring their fees and other related expenses for professional courses like engineering, medical, hotel management etc. 
                        </p>
                        </div>
                       
                      </div>
                      <div className="col-md-5 image_box border border-2">
                        <img src="/images/blog/higher-education-others.jpg" alt="" />
                        {/* <span className="blog-tag">{tag}</span> */}
                      </div>
                    </div>
                  </div>
                <div className="container-fluid ">
                  <ScholarshipProgramme/>
                  </div>
                  <div class="blog__content p-0 mt-10 ">
                    
                    <div className="row align-items-center ">
                      <div className="col-md-7  ">
                      <h4 class=" py-3 fs-30 fw-bold ">
                    Others
                    </h4>
                    <div className="pr-30">
                        <p class=" mb-2 mt-20  fw-500 text-justify">
                            
                        We organize various events and workshops for school going children and youth with the purpose of fostering sensitivity and creating social consciousness amongst them. 
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                            <span className="arrow"><i class="fa fa-angle-double-right "></i></span>
                            INCEPTUM : As an organization whose vision revolves around the welfare of the youth, Joining Hands has been successfully running INCEPTUM, A platform targeted towards “BUDDING YOUTH, i.e. school children, aiming at sensitizing them on challenges faced in environmental space 
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                        <span className="arrow"><i class="fa fa-angle-double-right"></i></span>
                            Theater : Joining Hands collaborates with renowned theater groups to spread awareness about socially relevant issues in schools and educational institutions.  
                        </p>
                        <p class="mb-2  fw-500 text-justify">
                        <span className="arrow"><i class="fa fa-angle-double-right"></i></span>
                            Workshops & Training : We engage in conducting capacity building workshops and training for various stakeholders in the society on various social issues such as Sexual Harassment of Women at workplace (SHAWP), Protection of Children from Sexual Offenses Act (POCSO) and Gender Sensitization, NGO Accounting & Reporting, Aligning CSR & NGOs strategy, Relation between People Management & Project Cycle,NGO legal Framework & Requirements.  
                        </p>
                        </div>
                       
                      </div>
                      <div className="col-md-5 image_box border border-2">
                        <img src="/images/blog/other-events.jpg" alt="" />
                        {/* <span className="blog-tag">{tag}</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Blog single area end here --> */}
      </main>
    </>
  );
};
export default Single;
