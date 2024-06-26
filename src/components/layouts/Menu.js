import React from 'react';
import { Link } from 'react-router-dom';


function Menu(){

    return(
        <div className="main-menu">
                    <nav>
                        <ul>
                            <li className="has-megamenu">
                                <Link to={'/'}>Home</Link>
                                {/* <ul className="sub-menu mega-menu menu-image">
                                    <li>
                                        <div className="image text-center">
                                            <img src="assets/images/menu/home1-image.jpg" alt="image"/>
                                            <div className="btn__group">
                                                <div className="btn-three">
                                                    <span className="btn-circle">
                                                    </span>
                                                    <a href="index.html" className="btn-inner">
                                                        <span className="btn-text">
                                                            Multi Page
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <h6 className="text-white">Home One</h6>
                                        </div>
                                        <div className="image text-center">
                                            <img src="assets/images/menu/home2-image.jpg" alt="image"/>
                                            <div className="btn__group">
                                                <div className="btn-three">
                                                    <span className="btn-circle">
                                                    </span>
                                                    <a href="index-2.html" className="btn-inner">
                                                        <span className="btn-text">
                                                            Multi Page
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <h6 className="text-white">Home Two</h6>
                                        </div>
                                        <div className="image text-center">
                                            <img src="assets/images/menu/home1-image.jpg" alt="image"/>
                                            <div className="btn__group">
                                                <div className="btn-three">
                                                    <span className="btn-circle">
                                                    </span>
                                                    <a href="index-one-page.html" className="btn-inner">
                                                        <span className="btn-text">
                                                            One Page
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <h6 className="text-white">Home One</h6>
                                        </div>
                                        <div className="image text-center">
                                            <img src="assets/images/menu/home2-image.jpg" alt="image"/>
                                            <div className="btn__group">
                                                <div className="btn-three">
                                                    <span className="btn-circle">
                                                    </span>
                                                    <a href="index-2-one-page.html" className="btn-inner">
                                                        <span className="btn-text">
                                                            One Page
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <h6 className="text-white">Home Two</h6>
                                        </div>
                                    </li>
                                </ul> */}
                            </li>
                            <li><Link to="/about">About</Link></li>
                            <li>
                                < Link to={'/single'} className='text-black'>What we do</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to={'/grid'}>Causes Grid</Link>
                                    </li>
                                    <li>
                                        <Link to={'/list'}>Causes List</Link>
                                    </li>
                                    <li>
                                        <Link to={'/single'}>Causes Single</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Pages</a>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to={'/project'}>Project</Link>
                                    </li>
                                    <li>
                                        <Link href={'/projectSingle'}>Project Single</Link>
                                    </li>
                                    <li>
                                        <Link to={'/volunteer'}>Volunteer</Link>
                                    </li>
                                    <li>
                                        <Link to={'/volunteerSingle'}>Volunteer Single</Link>
                                    </li>
                                    <li>
                                        <Link to={'/faq'}>FAQ's</Link>
                                    </li>
                                    <li>
                                        <Link to={'/error'}>404 Error</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Event</a>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to={'/eventgrid'}>Event Grid</Link>
                                    </li>
                                    <li>
                                        <Link to={'/eventlist'}>Event List</Link>
                                    </li>
                                    <li>
                                        <Link to={'/eventsingle'}>Event Single</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="">Resources Center</a>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to={'/Project'}>Gallery</Link>
                                    </li>
                                    <li>
                                        <Link to={'/stories-of-hope'}>Stories of hope</Link>
                                    </li>
                                    {/* <li>
                                        <Link to={'/blog'}>Blog single</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blogsingle'}>Blog single</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="blog-single.html">Blog Single</Link>
                                    </li> */}
                                </ul>
                            </li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
    );

}
export default Menu;