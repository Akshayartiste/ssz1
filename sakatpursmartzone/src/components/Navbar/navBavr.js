import './NavBar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img from "../public/logo.png";

export const Navbar = () => {

  return (
   <>
     <section id="header" class="header">
        <a>
            <img src={Img} className='logo' alt="Logo"/>
        </a>
        <div>
            <ul id="navbar" class="navbar">
                <li><Link to="/" className='active'>Home</Link></li>
                    <li><Link to="/courses">All Courses</Link></li>
                    <li><Link to="/pdf">Pdf Notes</Link></li>
                    <li class="mycourses"><Link to="/mycourses">My Courses</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <a href="#" id="close" class="close"><i class="fa-solid fa-xmark"></i></a>
            </ul>
        </div>
        <div id="mobile" class="mobile">    
            <i class="fas fa-outdent" id="bar"></i>
        </div>
    </section>
   </>
  );
};
