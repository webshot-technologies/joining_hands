import React from 'react'
import ScholarshipProgramme from '../animation/ScholarshipProgramme';
import Program from '../section/Program'


export const VolunteerSingle = () => {
  return (
    <>
   
    {/* <!-- Sidebar area end here --> */}

    <main>
        {/* <!-- Page banner area start here --> */}
        <section className="banner__inner-page bg-image pt-160 pb-160 bg-image" style={{backgroundImage: "url('/images/banner/what-we-do-baners.jpg')", position:"relative"}}
          >
               <div 
    className="overlay" 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(1, 0, 0, 0.5)'
    }}
  ></div>
            <div className="container overlay_content">
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">What We Can Do</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <a href="index.html">Home</a><span className='text-white'><i className="fa-regular fa-angles-right mx-2"></i>What We Can Do</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Team single area start here --> */}
        <section className="team-single pt-120 pb-120">

       
        <div class="container">
            <div class="row g-4">
              <div class="col-lg-12 order-2 order-lg-1">
                <div class="blog__item blog-single__left-item shadow-none">
                  <div class="progress-area px-4 pb-4 pt-10 ">
                    <h2 className="text-center fw-bold">What You Can Do </h2>
                  </div>
                  <div class="blog__content p-0">
                    <h4 class="mt-20 mb-20  py-5 fs-30 fw-bold text-center">
                      Partner With Us
                    </h4>
                    <div className="team-single-history mt-60">
                  <div className="container">
                   
                    <h4 className="primary-color text-capitalize mb-3">Corporates</h4>
                    <p>Corporates and institutions today are agents of change. They are embracing the socio-economic initiatives of non-profit organisations as a way to fulfil their own CSR goals and mandates. Our unique partnership models offer an opportunity to donate as well as be actively involved in a variety of fundraising activities that can be customised to specific requirements.</p>
                    <p>
                   <span className="arrow"><i class="fa fa-angle-double-right "></i></span> <strong> Corporate Social Responsibility:</strong> Joining Hands helps fulfill CSR mandates, thereby accomplishing specific, large-scale developmental goals that address community and stakeholders’ needs. 
                    </p>
                    <p>
                   <span className="arrow"><i class="fa fa-angle-double-right "></i></span> <strong>Employee engagement programs:</strong> Employee engagement programs have been established as a great way to make employees feel a part of the larger community as well as align their personal beliefs and values with that of their organisation. They create a close-knit work environment and are a fantastic opportunity for employees across professional levels and functions to connect with each other. Employee engagement activities leverage the power of business for social good. We work closely with organisations to conceptualise and manage employee volunteering programmes that are aligned with their specific goals and requirements. 
                    </p>
                    <p>
                    <span className="arrow"><i class="fa fa-angle-double-right "></i></span><strong>Payroll giving:</strong> Our corporate and employee payroll giving is simple, organized, tax-effective and hassle-free process. Through our corporate and employee payroll giving program, you can take your first steps toward contributing to the betterment of the underprivileged. Employees can decide how much, how often and to which cause their contribution goes. Our programme is measurable, easily replicable and scalable. 
                    </p>
                    <p>
                  <span className="arrow"><i class="fa fa-angle-double-right "></i></span>  <strong>Cause Related Marketing: </strong> Joining Hands can partner with your company to tackle social problems as well as create business value. In such campaigns, a brand is affiliated with a cause and a portion of the proceeds from sales are donated to that cause.
                    </p>
                    <p>
                   <span className="arrow"><i class="fa fa-angle-double-right "></i></span> <strong>Placement collaborations:  </strong> You can provide job placement opportunities to our beneficiaries and contribute to our cause.
                    </p>
                  


                    <h4 className="primary-color text-capitalize mb-3 mt-5">Schools
                    </h4>
                    <p>Early inclination of youth towards the needs and requirement of underprivileged section of the society creates a path for better future. We, at Joining Hands devise various programmes for school children in which they can make a valuable contribution towards the underprivileged section of the society. This will pave the way for growth and benefit of all and in the process help in moving towards an equitable Society. Any initiative from the school’s side is more than welcome.</p>
                  </div>
            </div>

                    
                  </div>
                  <div class="blog__content p-0 mt-100">
                   
                    {/* <div className="team-single-history mt-60">
                <div className="container">
                    <h4 className="primary-color text-capitalize mb-3">Corporates</h4>
                    <p>Corporates and institutions today are agents of change. They are embracing the socio-economic initiatives of non-profit organisations as a way to fulfil their own CSR goals and mandates. Our unique partnership models offer an opportunity to donate as well as be actively involved in a variety of fundraising activities that can be customised to specific requirements.</p>
                </div>
            </div> */}

                    <div className="row align-items-center ">
                      <div className="col-md-7 ">
                      <h4 class="  py-2 fs-30 fw-bold ">
                    Work with us
                    </h4>
                    <div className='pr-30'>
                        <p class=" mb-2 mt-20  fw-500 text-justify">
                        If you have a sense of responsibility towards society, and are seeking a career that gives you a sense of pride and satisfaction each day, then look no further. Looking for dedicated people who have a passion for working with youth. If you are interested please contact us at- info@joininghandsindia.org.
                        </p>
                        </div> 
                      </div>
                      <div className="col-md-5 image_box border border-2">
                        <img src="/images/blog/work-with-us.jpg" alt="" />
                        {/* <span className="blog-tag">{tag}</span> */}
                      </div>
                    </div>
                  </div>

                  <div class="blog__content p-0 mt-120">
                    
                    <div className="row align-items-center ">
                      <div className="col-md-5 image_box ">
                        <img src="/images/blog/other-12.jpg" alt="" />
                        {/* <span className="blog-tag">{tag}</span> */}
                      </div>
                      <div className="col-md-7  ">
                      <h4 class=" pl-30   py-3 fs-30 fw-bold ">
                       Volunteer
                      </h4>
                        <div className='pl-30'>
                        <p class=" mb-2 mt-20  fw-500 text-justify">
                         

                      You can be a part of the journey that aims to take steps towards transforming lives by sharing your knowledge and experience. As a volunteer, you can teach, conduct workshops, guest lectures, help write stories, assist in in-house documentation or be a fundraiser. If you are interested please contact us at- 
                      info@joininghandsindia.org
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
                  <div class="blog__content p-0 mt-100">
                  
                    <div className="row align-items-center ">
                      <div className="col-md-7 ">
                      <h4 class="  py-3 fs-30 fw-bold">
                    Donate
                    </h4>
                    <div className='pr-30'>
                        <p class=" mb-2 mt-20  fw-500 text-justify">
                        All funds donated to Joining Hands go towards empowering and employing the youth- and thus, indirectly towards building a better tomorrow. Your contribution will aid us in our endeavour, and provide a platform for the underprivileged youth. All donations made to Joining Hands are eligible for tax exemption under Section 80G.”
                        </p>
                        </div> 
                       
                      </div>
                      <div className="col-md-5 image_box ">
                        <img src="/images/blog/donate.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
          
           
        </section>
     <section className="service-area pt-100 pb-100 ">
        
        <Program/>
        </section>
        {/* <!-- Team single area end here --> */}
    </main>
    </>
  )
}
export default VolunteerSingle;
