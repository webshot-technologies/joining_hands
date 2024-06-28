import React from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';

const BlogItem = ({ image, tag, name, content, isReversed }) => {
  const imageColumn = (
    <div className="image_box col-md-3 ">
      <img src={image} alt={name} />
      {/* <span className="blog-tag">{tag}</span> */}
    </div>
  );

  const contentColumn = (
    <div className="blog__content row justify-content-between align-items-center  pt-10 col-md-9 ">
      <div className="">
        <h4 className="fw-bold" style={{ color: "#f74f22" }}>{name}</h4>
        <p className="fw-semibold">{content}</p>
      </div>
    </div>
  );

  return (
    <div className="blog__item row">
      {isReversed ? [contentColumn, imageColumn] : [imageColumn, contentColumn]}
    </div>
  );
};

const Blog = () => {
  const blogItems = [
    {
      image: "/images/blog/g-6.jpg",
      tag: "Asst. Manager",
      name: "Ashok",
      content:'"I used to just lurk around here and there and after joining this course I finally started realising the importance of jobs. Now I just don’t feel like leaving my workplace, I enjoy it to the fullest." – Ashok, works with Banaras ( Pan Parlour) as Asst. Manager. '
    },
    {
      image: "/images/blog/g-1.jpg",
      tag: "Scholarship Programme",
      name: "Laxmi",
      content:"'This scholarship program has directed me towards my goals and has given me a new life' – Laxmi Haldar, pursuing a BSE program from Institute of Hotel Management, Panipat, supported by Joining Hands Higher Education Scholarship Programme."
    },
    {
      image: "/images/blog/g-2.jpg",
      tag: "Competent Software ",
      name: "Kavya",
      content: "I am very grateful to Joining Hands for providing me this opportunity to fulfil my dreams. In this scholarship programme you are not only giving financial support, but you are also conducting mentorship programme which provides career guidance sessions and trains us in life skills and soft skills. In the future, if I become a successful person, I will do my bit and will give back to the society - Niveditha, pursuing B. Sc course at BGS Science Academy, Chickballapur, Karnataka, supported by Joining Hands Higher Education Scholarship Programme."
    },
    {
      image: "/images/blog/g-3.jpg",
      tag: "Scholarship Programme",
      name: "Niveditha",
      content:"I am very grateful to Joining Hands for providing me this opportunity to fulfil my dreams. In this scholarship programme you are not only giving financial support, but you are also conducting mentorship programme which provides career guidance sessions and trains us in life skills and soft skills. In the future, if I become a successful person, I will do my bit and will give back to the society - Niveditha, pursuing B. Sc course at BGS Science Academy, Chickballapur, Karnataka, supported by Joining Hands Higher Education Scholarship Programme."
    },
    {
      image: "/images/blog/g-4.jpg",
      tag: "Software Developer",
      name: "Archana",
      content:"Dolor sit amet consectetur adipiscing elit. Integer nunc viverra the laoreet est, a pretium metus aliquam eget. Maecenas porta is nunc ut viverra. Aenean pulvinar maximus leo."
    },
    {
      image: "/images/blog/g-5.jpg",
      tag: "Hospitality Skills Development Programme",
      name: "Roshni",
      content:"'Initially, I was not very sure about what I wanted to do in life. My batch mate referred me to the Hospitality course in Joining Hands Training Centre. I gradually started taking interest in the classes. Through this course I actually learnt a lot and got a great exposure. And I must say it was the best decision of my life. I am currently working with Nando’s and I love my job! '- Roshni, trained under the Joining Hands Hospitality Skills Development Programme and presently working with Nando’s, Nehru Place, Delhi."
    },
    // Add more blog items here...
  ];

  return (
    <main>
      <section 
        className="banner__inner-page bg-image pt-160 pb-160 " 
        style={{backgroundImage: "url('/images/banner/story-of-hope.jpg')",position:"relative"}}
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
        <div className="container overlay_content" >
          <h2 className="wow fadeInUp " data-wow-delay="00ms" data-wow-duration="1500ms">stories-of-hope</h2>
          <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Link to='/'>Home</Link>
            <span className='text-white'><i className="fa-regular fa-angles-right mx-2"></i>stories-of-hope</span>
          </div>
        </div>
      </section>

      <section className="blog-area  pb-120">
        <div className='container my-5'>
          <div className="row justify-content-center align-items-center">
            <h2 className='text-center fw-bold'>Stories Of Hope</h2>
          </div>
        </div>
        
        <div className="container">
          <div className="row g-4">
            {blogItems.map((item, index) => (
              <div key={index} className="col-xl-12  blogitem_container  wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" >
                <BlogItem {...item} isReversed={index % 2 !== 0} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;