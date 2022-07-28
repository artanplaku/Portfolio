import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import ProjectOne from "./ProjectOne";
import "./Intro.css"

const Intro = () => {
  

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
    <div>
       <div>
       <ul>
       <li>
            <a className="first" href="#about">Contact</a>
            </li>
            <li>
                <a className="first" href="#contact">Portfolio</a>
            </li>
            <li>
                <a className="first" href="#news">About</a>
            </li>
            <li>
                <a className="first" id="active" href="#home">
                  Home
                </a>
            </li>
        </ul>
    </div>
      <section className="hero__container" id="home">
        <h1 className="hero__title--small">Hi, my name is</h1>
        <h2 className="hero__title--big">Artan Plaku</h2>
        <h2 className="hero__title--big">
          I'm a <span ref={typedRef}></span> Developer
        </h2>
        <p className="hero__text">
          A Software Engineer who can build a web presence from the ground up
          using current best practices. Passionate learner, hard worker, and
          team player who is proficient in an array of scripting languages and
          multimedia web tools.
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
        <h1 className="about__title">About Me</h1>
        <div className="about__content">
          <div className="about__left">
            <p className="about__text">
              Hello! my name is Jerome, a software engineer in New York. My
              passion for web development sparked in 2018 when I completed my
              first course with Codecademy Programming with Python. Completing
              that course sparked a passion for learning and growth. I also
              finished Udacity course Intro to Programming Nanodegree, three
              Udemy courses such as The Web Developer Bootcamp, Build Responsive
              Real-World Websites with HTML and CSS, and Modern React with
              Redux. In the future, I see myself as a full-stack engineer
              supporting clients and building products that will give back to
              communities.
            </p>

            <p className="about__text">
              Currently, I am enrolled in the General Assembly as a part-time
              software engineer immersive, expanding my learning and best
              practices. When I am not in class or freelancing, you can find me
              on twitch playing games such as Valorant, League of Legends, or
              Lost Ark. Also a fan of basketball, reading, and working out.
            </p>

            {/* <div className="about__tech">
              <h2 className="about__tech-title">Tech</h2>
              <ul className="about__tech-list">
                {tech.map((item) => {
                  return <AboutList id={item.id} tech={item.tech} />;
                })}
              </ul>
            </div> */}
          </div>
          <div className="about__right">
            <img src={'https://media-exp1.licdn.com/dms/image/C4E03AQGZKEIX7tNw7Q/profile-displayphoto-shrink_400_400/0/1637545247385?e=1664409600&v=beta&t=VRtbdj6ONhyJT7DfTDvIWkUhymEqziWEXLOjBvBSgsU'} alt="jerome" className="about__image" />
          </div>
        </div>
      </section>
      <section>
        <h1>Portfolio</h1>
        <div className="project__div">
          <div className="project__div__inside">
             <a
              href="https://open-vault-game.netlify.app/"
              target="_blank"
            >
            <div className="project__one">
            <p className="open_vault">Open the Vault</p>
            <div className="space__around"></div>
            <p className="portfolio__text">
            Open the vault is a two player game, where one player picks a word and the other has 1 minute to guess it.
          </p>

            </div>
            </a>
           
            <div className="project__two">
            CryptoSearch
             <a

              href="https://github.com/dev-rome/Tenant-Estate"
              target="_blank"
            >
              

            </a>
            </div>
            <div className="project__three">
            Reveal
             <a

              href="https://github.com/dev-rome/Tenant-Estate"
              target="_blank"
            >
              

            </a>
            </div>
          </div>
        </div>
      </section>
      
      </div>
  );
};

export default Intro;