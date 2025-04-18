import React, { useEffect, useRef, useState } from "react";
import "../styles/aboutStyle.css";
import logo from "../assets/images/river-logo.png"; // Import the logo
import river1 from "../assets/images/river1.jpg";
import river2 from "../assets/images/river2.jpg";
import river3 from "../assets/images/river3.jpg";
import river4 from "../assets/images/river4.jpg";
import river5 from "../assets/images/river5.jpg";
import river6 from "../assets/images/river6.jpg";
import river7 from "../assets/images/river7.jpg";
import river8 from "../assets/images/river8.jpg";
import river9 from "../assets/images/river9.jpg";
import river10 from "../assets/images/river10.jpg";

const welcomeMessages = [
  "Welcome to my About Page!",
  "Woah! We've teleported!",
  "You found my About page!",
  "Exploring deeper, I see!",
  "Let's talk about me!",
];

const images = [
  river1,
  river2,
  river3,
  river4,
  river5,
  river6,
  river7,
  river8,
  river9,
  river10,
];

const InfiniteSlideshow = ({ images, isSlideshowVisible }) => {
  const slideshowRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    const scrollSpeed = -1;

    const moveSlideshow = () => {
      if (slideshowRef.current) {
        scrollAmount += scrollSpeed;
        if (scrollAmount <= -slideshowRef.current.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slideshowRef.current.style.transform = `translateX(${scrollAmount}px)`;
      }
      animationRef.current = requestAnimationFrame(moveSlideshow);
    };

    animationRef.current = requestAnimationFrame(moveSlideshow);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div
      className={`slideshow-container ${
        isSlideshowVisible ? "slide-in-bottom" : ""
      }`}
    >
      <div className="slideshow-wrapper">
        <div className="slideshow-track" ref={slideshowRef}>
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              className={`slideshow-image slide-${index % images.length}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const slideshowRef = useRef(null);
  const bioRef = useRef(null);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState("");
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isSlideshowVisible, setIsSlideshowVisible] = useState(false);
  const [isBioVisible, setIsBioVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      logoRef.current?.classList.add("spin-fade-in");
    }, 100);

    const bubbleTimeout = setTimeout(() => {
      const randomMessage =
        welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
      setBubbleMessage(randomMessage);
      setShowBubble(true);
    }, 1800);

    const hideBubbleTimeout = setTimeout(() => {
      setShowBubble(false);
    }, 6800);

    let scrollTimeout;

    const handleScroll = () => {
      if (scrollTimeout) return;

      scrollTimeout = requestAnimationFrame(() => {
        if (headerRef.current && !isHeaderVisible) {
          const headerTop = headerRef.current.getBoundingClientRect().top;
          if (headerTop < window.innerHeight * 0.8) {
            setIsHeaderVisible(true);
          }
        }
        if (slideshowRef.current && !isSlideshowVisible) {
          const slideshowTop = slideshowRef.current.getBoundingClientRect().top;
          if (slideshowTop < window.innerHeight * 0.9) {
            setIsSlideshowVisible(true);
          }
        }
        if (bioRef.current && !isBioVisible) {
          const bioTop = bioRef.current.getBoundingClientRect().top;
          if (bioTop < window.innerHeight * 0.9) {
            setIsBioVisible(true);
          }
        }
        scrollTimeout = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(bubbleTimeout);
      clearTimeout(hideBubbleTimeout);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    };
  }, [isHeaderVisible, isSlideshowVisible, isBioVisible]);

  return (
    <div className="about-page">
      <div ref={logoRef} className="logo-container">
        <img src={logo} alt="River Logo" className="river-logo" />
        {showBubble && (
          <div className="speech-bubble-about">
            <span>{bubbleMessage}</span>
          </div>
        )}
      </div>
      <div className="about-container">
        <h1
          ref={headerRef}
          className={`who-is-header ${isHeaderVisible ? "slide-in" : ""}`}
        >
          Who is River Maners?
        </h1>
      </div>
      <div ref={slideshowRef}>
        <InfiniteSlideshow
          images={images}
          isSlideshowVisible={isSlideshowVisible}
        />
      </div>
      <div
        ref={bioRef}
        className={`bio-section ${isBioVisible ? "slide-in-bio" : ""}`}
      >
        <div className="bio-header">About Me</div>
        <div className="bio-content">
          <p>
            Hi, I'm River Maners! I'm currently studying Computer Information
            Systems with a minor in Internet Application Development. I have a
            passion for web and mobile development, and I love building
            interactive user experiences.
          </p>
          <p>
            My interests include front-end development, UI/UX design, and
            software engineering. I'm always looking to learn new technologies
            and improve my coding skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
