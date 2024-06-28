import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import WOW from 'wowjs';

 const Project = () => {


    useEffect(() => {
        // Initialize WOW.js
        new WOW.WOW({
          live: false
        }).init();
      }, []);
    
      // Store brand images in an array
     
        const projects = [
          { image: "/images/project/event-3.jpg", delay: "00ms", col: "col-md-6",  },
          { image: "/images/project/event-4.jpg", delay: "200ms", col: "col-md-6",},
          { image: "/images/project/event-5.jpg", delay: "00ms", col: "col-md-7",  },
          { image: "/images/project/higher-education-2.jpg", delay: "200ms", col: "col-md-5",  },
          { image: "/images/project/higher-education-3.jpg", delay: "00ms", col: "col-md-6",  },
          { image: "/images/project/higher-education.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/hospitalaity-1.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/hospitalaity-2.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/hospitalaity-3.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/other-3.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/other-4.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/other-5.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/other-6.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/other-7.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/other-8.jpg", delay: "200ms", col: "col-md-6",name:"lex" },
          { image: "/images/project/other-9.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/other-14.jpg", delay: "200ms", col: "col-md-6", },
          { image: "/images/project/training26.jpg", delay: "200ms", col: "col-md-6", },
        ];
      
        const ProjectItem = ({ image, delay, col,name }) => (
            <div className="col-md-4 wow fadeInDown" data-wow-delay={delay} data-wow-duration="1500ms">
              <div className="project__item">
                <div className="image">
                  <img src={image} alt="project" />
                </div>
                <div className="project__content">
                  <div className="con">
                    <h4><a href="project-single.html" className="text-white"> {name}</a></h4>
                    {/* <span className="text-white">Volunteer</span> */}
                  </div>
                  {/* <a href="project-single.html" class="next-btn">
                    <i
                                        class="fa-regular fa-arrow-right"></i>
                                        </a> */}
                </div>
              </div>
            </div>
          );
        

  return (
    <>
     
    <main>
        {/* <!-- Page banner area start here --> */}
        <section className="banner__inner-page bg-image pt-160 pb-160 bg-image" style={{backgroundImage:"url('/images/banner/gallery.jpg')", position:"relative"}}
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
                <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Gallery</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <Link to={'/'}>Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>Gallery</span>
                </div>
            </div>
        </section>
        {/* <!-- Page banner area end here --> */}

        {/* <!-- Project area start here --> */}
        <section className="project-area pt-120 pb-120">
          <div className="container">
           <div className="row g-4">
              {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
          ))}
          </div>
          </div>
       </section> 
        {/* <!-- Project area end here --> */}
    </main>
    </>
  );
}
export default Project;
