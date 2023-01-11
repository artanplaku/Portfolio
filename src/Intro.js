import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Intro.css"
import Contact from "./Contact";
import Profile from './profile.jpeg'

const Intro = () => {
  const ref = useRef(null)
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  // const ref1 = useRef(null)
  // const handleAbout = () => {
  //   ref1.current?.scrollIntoView({behavior: 'smooth'});
  // };

 

    const typedRef = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full-Stack", "Freelance"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="intro-container">
       <div>
       <ul>
            <li>
            <a  className="first" href="#contact">Contact</a>
            </li>
            <li>
                <a onClick={handleClick} className="first" href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a className="first" href="#about">About</a>
            </li>
            <li>
              <a  className="first" id="active" href="#home">
                  Home
                </a>
            </li>
        </ul>
    </div>
      <section className="hero__container" id="home">
        <div className="header">
        <h1 className="hero__title--small">Hi, my name is</h1>
        </div>
        <h2 className="hero__title--big">Artan Plaku</h2>
        <h2 className="hero__title--big">
          I'm a <span ref={typedRef}></span> Developer
        </h2>
        <p className="hero__text">
          A Software Engineer with a strong interest in building scalable and user-friendly applications. Proven track record of leading  projects from the ground up. Comfortable working in a team-oriented environment on both small and large projects.
          
        </p>
        <div className="hero__btn">
          <a
            href="https://www.linkedin.com/in/artan-plaku/"
            className="hero__btn-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hero__btn-icon"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/artanplaku"
            className="hero__btn-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hero__btn-icon"></i>
            Github
          </a>
        </div>
      </section>
      <section className="about__container" id="about">
        <h1  className="about__title">About Me</h1>
        <div  className="about__content">
          <div className="about__left">
            <p className="about__text">
            Hello! My name is Artan and I am a software engineer in New York. I received my introduction to software development during my involvement in creating an online tutoring company, which ignited a strong desire to learn more about the field. This led to my participation in General Assembly's SEI program, where I accrued over 480 hours of class time. When I am not  coding, you can expect to find me playing volleyball or exploring museums.
            </p>

            

            
          </div>
          <div className="about__right">
            <img src={Profile} alt="artan" className="about__image" />
          </div>
        </div>
      </section>
      <section ref={ref}>
        <h1  className="portfolio">Portfolio</h1>
        <div   className="project__div">
          <div className="project__div__inside">


             <a
              href="https://open-vault-game.netlify.app/"
              target="_blank"
              rel="noreferrer"
              >
            <div className="project__one">
            <p className="open_vault">Open the Vault</p>
            <div className="space__around"></div>
            </div>
            </a>
            <p className="portfolio__text">
            Open the vault is a two player game, where one player picks a word and the other has 1 minute to guess it.
          </p>
            
           
             <a
              href="https://revealstore.netlify.app//"
              target="_blank"
              rel="noreferrer"
              >
            <div className="project__three">
            <p className="open_vault">Reveal</p>
            <div className="space__around"></div>
            </div>
            </a>
            <p className="portfolio__text">
            Online store lets users buy products 
          </p>

             <a
              href="https://artanscrypto.netlify.app/"
              target="_blank"
              rel="noreferrer"
              >
            <div className="project__two">
            <p className="open_vault">CryptoSearch</p>
            <div className="space__around"></div>
            </div>
            </a>
            <p className="portfolio__text">
            CryptoSearch lets you research crypto coins by marketcap, price and volume
          </p>
            

          </div>
        </div>
      </section>

      <Contact className='contact'/>
      
      </div>
  );
};

export default Intro;