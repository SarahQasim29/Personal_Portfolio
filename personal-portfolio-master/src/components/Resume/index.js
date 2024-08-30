import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters'; // Adjust path if necessary
import './index.scss'; // BEM CSS

const ResumeSection = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const headingArray = 'Resume'.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="resume-section">
      <h1 className="resume-section__title">
        <AnimatedLetters letterClass={letterClass} strArray={headingArray} idx={15} />
      </h1>
      <div className="resume-section__content">
        <div className="resume-section__pdf-container">
          <iframe
            src="\_Resume (3) (2) (1).pdf"
            title="Resume"
            className="resume-section__pdf"
            type="application/pdf"
          />
        </div>
        <div className="resume-section__buttons">
          <a href="\_Resume (3) (2) (1).pdf" target="_blank" rel="noopener noreferrer" className="resume-section__link">
            <button className="resume-section__button">View Resume</button>
          </a>
          <a href="\_Resume (3) (2) (1).pdf" download className="resume-section__link">
            <button className="resume-section__button">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
