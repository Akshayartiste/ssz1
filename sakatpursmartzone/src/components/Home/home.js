import React from 'react';
import '../Navbar/NavBar.css';
import { Futer } from './futer';

export const MainContent = () => {

  return (
   <>
     <section id="hero" class="hero">
        <h4>Trade-in-offer</h4>
        <h2>Learn Computer Courses</h2>
        <h1>On all Courses</h1>
        <p>up to 70% off!</p>
        <button>Buy Now</button>
    </section>
   </>
  );
};

export const FuterComponants = () => {

  return (
   <>
    <Futer />
   </>
  );
};