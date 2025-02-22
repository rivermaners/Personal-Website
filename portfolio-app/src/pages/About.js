import React, { useEffect, useRef, useState } from 'react';
import '../styles/aboutStyle.css';
import logo from '../assets/images/river-logo.png'; // Import the logo

const welcomeMessages = [
  "Welcome to my About Page!",
  "Woah! We've teleported!",
  "You found my About page!",
  "Exploring deeper, I see!",
  "Let's talk about me!"
];

const About = () => {
  const aboutRef = useRef(null);
  const bioRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const scrollTimeout = useRef(null); // Prevent multiple updates in quick succession

  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState("");
  const [showScrollText, setShowScrollText] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setIsLogoVisible(true);

    setTimeout(() => {
      const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
      setBubbleMessage(randomMessage);
      setShowBubble(true);
    }, 1700);

    setTimeout(() => setShowBubble(false), 5000);

    setTimeout(() => {
      setShowScrollText(true);
    }, 1500);

    const handleScroll = () => {
      if (scrollTimeout.current) return;

      scrollTimeout.current = requestAnimationFrame(() => {
        if (aboutRef.current && !showAbout) {
          const aboutTop = aboutRef.current.getBoundingClientRect().top;
          if (aboutTop < window.innerHeight * 0.8) {
            setShowAbout(true);
          }
        }

        if (bioRef.current && !showBio) {
          const bioTop = bioRef.current.getBoundingClientRect().top;
          if (bioTop < window.innerHeight * 0.8) {
            setShowBio(true);
          }
        }

        if (headerRef.current && !isHeaderVisible) {
          const headerTop = headerRef.current.getBoundingClientRect().top;
          if (headerTop < window.innerHeight * 0.8) {
            setIsHeaderVisible(true);
          }
        }

        scrollTimeout.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) cancelAnimationFrame(scrollTimeout.current);
    };
  }, [showAbout, showBio, isHeaderVisible]);

  return (
    <div className="about-page">
      {/* Centered Logo at Start */}
      <div ref={logoRef} className={`logo-container ${isLogoVisible ? 'spin-fade-in' : ''}`}>
        <img src={logo} alt="River Logo" className="river-logo" />
        {showBubble && <div className="speech-bubble-about"><span>{bubbleMessage}</span></div>}

        {/* Scroll Down! with Flashing Arrows */}
        {showScrollText && (
          <div className="scroll-down">
            <span className="arrow">↓</span> Scroll Down! <span className="arrow">↓</span>
          </div>
        )}
      </div>

      {/* Single "Who is River Maners?" Section - Appears on Scroll */}
      <div ref={aboutRef} className="about-container">
        <div
          ref={headerRef}
          className={`who-is-header ${isHeaderVisible ? 'slide-in' : ''}`}
        >
          <h1>Who is River Maners</h1>
        </div>
      </div>

      {/* Bio Section - Centered & Appears on Scroll */}
      <div ref={bioRef} className={`bio-container ${showBio ? 'slide-in-bio' : ''}`}>
        <div className="bio-content">
          <img src="/assets/images/river-photo.jpg" alt="River Maners" className="bio-image" />
          <div className="bio-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm River Maners! I'm currently studying <strong>Computer Information Systems</strong> with a 
              minor in <strong>Internet Application Development</strong>. I have a passion for web and mobile development, 
              and I love building interactive user experiences.
            </p>
            <p>
              My interests include <strong>front-end development, UI/UX design, and software engineering</strong>. 
              I'm always looking to learn new technologies and improve my coding skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
