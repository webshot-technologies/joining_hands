import React from 'react'

export const Program = () => {
  return (

     <section className="service-area pt-100 pb-100 sub-bg">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" >
                        <div className="service__item" >
                            <div className="service__icon "><img src="images/icon/course-1.png"   style={{width: "100%", height: "100px"}} alt="icon"/></div>
                            <div className="service__content">
                                <h3 className="text-white">Enhancing Employability</h3>
                                <p className="text-white"> To enhance skills of the less privileged youth and to make them employable.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" >
                        <div className="service__item active">
                            <div className="service__icon"><img src="images/icon/course-2.png" className='mx-auto d-block' style={{width: "100%", height: "100px"}} alt="icon"/></div>
                            <div className="service__content">
                                <h3 className="text-white">Higher Education</h3>
                                <p className="text-white">Joining Hands expanded its outreach by initiating the Higher Education Scholarship Programme.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" >
                        <div className="service__item">
                            <div className="service__icon"><img src="images/icon/course-3.png" style={{width: "100%", height: "100px"}} alt="icon"/></div>
                            <div className="service__content">
                                <h3 className="text-white">Others</h3>
                                <p className="text-white"> organize various events and workshops for school going children and youth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Program;
