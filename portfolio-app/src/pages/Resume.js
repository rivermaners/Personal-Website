import React, { useEffect, useRef, useState } from "react";
import "../styles/resumeStyle.css";
import logo from "../assets/images/river-logo.png";

const Resume = () => {
  const logoRef = useRef(null);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.classList.add("logo-spin-in");
    }

    const bubbleTimeout = setTimeout(() => {
      setShowBubble(true);
    }, 1500);

    const hideTimeout = setTimeout(() => {
      setShowBubble(false);
    }, 6500);

    return () => {
      clearTimeout(bubbleTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="resume-page fade-in">
      <div className="resume-header">
        <div className="header-row">
          <h1 className="header-name">River Maners</h1>
          <div className="header-logo">
            <img
              src={logo}
              alt="River Logo"
              className="page-logo"
              ref={logoRef}
            />
            {showBubble && (
              <div className="speech-bubble-resume">
                <span>You found my resume!</span>
              </div>
            )}
          </div>
        </div>
        <a href="/Resume - Joshua River Maners.docx.pdf" download className="download-button">
          Download Resume
        </a>
      </div>

      <hr className="resume-divider" />

      <div className="resume-section">
        <h2>Work Experience</h2>
        <h3>Chicago Metropolitan Agency for Planning - IT Technician Intern</h3>
        <p className="date">May 2024 - Present</p>
        <ul>
          <li>Handled help desk tickets and provided technical support</li>
          <li>Built and maintained SharePoint websites</li>
          <li>Assisted with security remediation, network troubleshooting</li>
          <li>Managed laptops, servers, and databases</li>
        </ul>

        <hr className="resume-divider" />

        <h3>Illinois Institute of Technology - Pool Lifeguard</h3>
        <p className="date">August 2021 - May 2024</p>
        <ul>
          <li>Ensured safety of pool patrons and enforced safety protocols</li>
          <li>Maintained pool chemical balance and equipment</li>
        </ul>
      </div>

      <hr className="resume-divider" />

      <div className="resume-section">
        <h2>Education</h2>
        <p className="date">August 2021 - May 2025</p>
        <h3>
          <strong>Illinois Institute of Technology</strong>
        </h3>
        <div classsname="degreeList">
          <ul>
            <li>B.S. Computer Information Systems</li>
            <ul>
              <li>Minor in Internet Application Development</li>
            </ul>
          </ul>
        </div>
      </div>

      <hr className="resume-divider" />

      <div className="resume-section">
        <h2>Skills</h2>
        <div className="skills-group">
          <h3>Programming Skills</h3>
          <div className="skills-grid">
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>OCaml</li>
              <li>Dart</li>
              <li>Flutter</li>
              <li>SQL</li>
              <li>Data Structures</li>
            </ul>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>R</li>
            </ul>
          </div>

          <h3>IT Skills</h3>
          <div className="skills-grid">
            <ul>
              <li>Windows</li>
              <li>Azure</li>
              <li>Intune</li>
              <li>Office Suite</li>
            </ul>
            <ul>
              <li>ManageEngine</li>
              <li>Forticlient</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="resume-divider" />

      <div className="resume-section">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>rivermaners.xyz</h3>
            <p>Personal portfolio website built with React.</p>
            <a href="https://rivermaners.xyz" target="_blank" rel="noreferrer">
              Visit Site →
            </a>
          </div>

          <div className="project-card">
            <h3>WIIT Radio Website</h3>
            <p>Website for Illinois Tech radio station, WIIT.</p>
            <a href="https://radio.iit.edu/" target="_blank" rel="noreferrer">
              Visit Site →
            </a>
          </div>

          <div className="project-card">
            <h3>Yale School of Art Redesign</h3>
            <p>Website redesign for the Yale School of Art.</p>
            <a
              href="https://rivermaners.github.io/Website-Redesign/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site →
            </a>
          </div>
          <div className="project-card">
            <h3>Address Book Website</h3>
            <p>Basic address book website for class project.</p>
            <a
              href="https://jmaners-lab3.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
