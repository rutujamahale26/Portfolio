import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Typed from 'typed.js'
import pdf from '../../pdf/Rutuja_Resume.pdf'


const Hero = () => {
  const typedref = useRef(null);

  useEffect(()=>{
    const options = {
      strings:["Welcome to my profile", 
        "My name is Rutuja Mahale",
        "I'm MERN Stack Developer",
        "I'm ReactJS Developer",
        "I'm Full Satck Developer"
      ],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    };

    const typed = new Typed(typedref.current, options)

    return()=>{
      typed.destroy()
    }
  },[])
  return (
    <div id="home" className="hero container">
      <div className="left">
        <h2 ref={typedref}></h2>
        <a href={pdf} download='Rutuja_Resume.pdf'>Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
            <img src="assets/hero/hero.avif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
