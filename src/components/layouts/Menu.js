import React from 'react';
import { Link } from 'react-router-dom';


function Menu(){

    return(
        <div className="main-menu d-none d-lg-block ">
                    <nav>
                        <ul>
                            <li className="has-megamenu">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link></li>
                            <li>
                                < Link to={'/single'}>What we do</Link>
                            </li>
                           
                            <li>
                                <Link to={'/volunteerSingle'}>What You Can Do</Link>
                            </li>
                            <li>
                                <Link to={''}>Resources Center</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to={'/Project'}>Gallery</Link>
                                    </li>
                                    <li>
                                        <Link to={'/stories-of-hope'}>Stories of hope</Link>
                                    </li>                                
                                </ul>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
    );

}
export default Menu;