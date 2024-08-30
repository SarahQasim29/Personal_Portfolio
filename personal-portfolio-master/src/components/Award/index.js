// src/pages/Certifications/Certifications.jsx
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

// Correct the paths based on the image location
import basicPythonImage from '../../assets/images/basicPythonImage.jpeg';
import reactJsImage from '../../assets/images/reactJsImage.jpeg';
import code from '../../assets/images/code.JPG';

const Certifications = () => {
  const certificationsArray = 'Certifications'.split('');

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const certifications = [
    { 
      name: 'Python Quiz', 
      organization: 'CodeAlpha', 
      date: 'August 2024', 
      image: code
    },
    { 
      name: 'Basic to Advance Python Course', 
      organization: 'Softic Solutions', 
      date: 'June 2024', 
      image: basicPythonImage
    },
    { 
      name: 'React JS Tutorial Course', 
      organization: 'Great Learning', 
      date: 'July 2024', 
      image: reactJsImage
    }
  ];

  return (
    <>
      <div className="certifications-page">
        <div className="certifications-page__text-zone">
          <h1 className="certifications-page__title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={certificationsArray}
              idx={15}
            />
          </h1>
          <p className="certifications-page__paragraph">
            Here are some of the certifications I’ve achieved over the years.<br />
            These credentials represent my continuous learning and dedication to enhancing my skills.
          </p>
          <div className="certifications-page__list">
            {certifications.map((cert, index) => (
              <div key={index} className="certifications-page__item">
                <img src={cert.image} alt={cert.name} className="certifications-page__item__image" />
                <h2 className="certifications-page__item__title">{cert.name}</h2>
                <p className="certifications-page__item__description">{cert.organization}</p>
                <span className="certifications-page__item__date">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Certifications;
