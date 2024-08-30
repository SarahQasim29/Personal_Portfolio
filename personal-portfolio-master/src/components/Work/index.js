import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'; // Adjust import path as needed
import Slider from 'react-slick'; // Import react-slick
import './index.scss'; // BEM CSS
import arslogin from '../../assets/images/arslogin.jpeg';
import arsflight from '../../assets/images/arsflight.jpeg';
import arsair from '../../assets/images/arsair.jpeg';
import hms from '../../assets/images/Hms.png';
import Algo from '../../assets/images/Algo.png';
import cpualgo from '../../assets/images/CPU.png';
import pizza from '../../assets/images/Pizza.png';
import count from '../../assets/images/counter.png';
import portfolio from '../../assets/images/port.png';
import cpu1 from '../../assets/images/cpumain.jpeg';
import cpu3 from '../../assets/images/cpu3.jpeg';
import cpu2 from '../../assets/images/cpu2.jpeg';
import cpu4 from '../../assets/images/cpu4.jpeg';
import algo1 from '../../assets/images/mainalgo.jpeg';
import algo2 from '../../assets/images/algo1.jpeg';
import algo3 from '../../assets/images/algo2.jpeg';
import algo4 from '../../assets/images/algo3.jpeg';
import pizza1 from '../../assets/images/pizza1.png';
import pizza2 from '../../assets/images/pizza2.png';
import pizza3 from '../../assets/images/pizza3.png';
import pizza4 from '../../assets/images/pizza4.png';
import count1 from '../../assets/images/count1.jpeg';
import count2 from '../../assets/images/count2.jpeg';
import hotel1 from '../../assets/images/hotel1.png';
import hotel2 from '../../assets/images/hotel2.png';
import hotel3 from '../../assets/images/hotel3.png';
import hotel4 from '../../assets/images/hotel4.png';
import port1 from '../../assets/images/port1.jpeg';
import port2 from '../../assets/images/port2.jpeg';
import port3 from '../../assets/images/port3.jpeg';
import port4 from '../../assets/images/port4.jpeg';

const projects = [
  {
    title: "Project 1",
    description: "Streamlines online bookings, allowing users and admins to manage flights efficiently with SQL database integration.",
    languages: ["C#", "SQL"],
    link: "https://github.com/SarahQasim29/Airline_Reservation_System",
    images: [
      require('../../assets/images/arss.png'), // Your images here
      arsair,
      arslogin,
      arsflight
    ]
  },
  {
    title: "Project 2",
    description: "Automates reservations, room management, and billing, using OOP concepts in Java and SQL for backend operations.",
    languages: ["Java", "SQL"],
    link: "https://github.com/SarahQasim29/Hotel_Management_System",
    images: [
      hms,
      hotel1,
      hotel2,
      hotel3,
      hotel4
    ]
  },
  {
    title: "Project 3",
    description: "Simplifies learning algorithms by offering interactive visualizations of sorting, searching & pathfinding techniques ",
    languages: ["HTML", "CSS", "JS"],
    link: "https://github.com/SarahQasim29/AlgoVisualizer_DSA",
    images: [
      Algo,
      algo1,
      algo2,
      algo3,
      algo4
    ]
  },
  {
    title: "Project 4",
    description: "Enabling users to model, visualize, & compare algorithms with performance metrics & graphical representation.",
    languages: ["HTML", "CSS", "JS"],
    link: "https://github.com/SarahQasim29/CPU_Schedular_Web",
    images: [
      cpualgo,
      cpu1,
      cpu3,
      cpu2,
      cpu4
    ]
  },
  {
    title: "Project 5",
    description: "A responsive website featuring an interactive menu, order form, & animations integrating with Ms Access database.",
    languages: ["HTML", "CSS", "JS"],
    link: "https://github.com/SarahQasim29/PizzaLicious_Web",
    images: [
      pizza,
      pizza1,
      pizza2,
      pizza3,
      pizza4
    ]
  },
  {
    title: "Project 5",
    description: "A counter App with functionality to increment, decrement, and reset the counter, featuring basic state management.",
    languages: ["React JS"],
    link: "https://github.com/SarahQasim29/React_Counter_App",
    images: [
      count,
      count1, 
      count2
    ]
  },
  {
    title: "Project 6",
    description: "This is a description of Project 6.",
    languages: ["React JS", "SCSS"],
    link: "https://github.com/SarahQasim29/Personal_Portfolio",
    images: [
      portfolio,
      port1,
      port2,
      port3,
      port4
    ]
  },
  // Add more projects as needed
];

const ProjectShowcase = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [currentImages, setCurrentImages] = useState(projects.map(() => 0)); // Tracks current image index for each project

  const headingArray = 'My Projects'.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Handle image click to move to the next image
  const handleImageClick = (projectIndex) => {
    setCurrentImages((prevImages) => {
      const nextImageIndex = (prevImages[projectIndex] + 1) % projects[projectIndex].images.length;
      const updatedImages = [...prevImages];
      updatedImages[projectIndex] = nextImageIndex;
      return updatedImages;
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="project-showcase__container">
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={headingArray} idx={15} />
      </h1>
      <div className="project-showcase__slider">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-showcase__card" key={index}>
              <img
  src={project.images[currentImages[index]]}
  alt={project.title} // Simplified alt text to avoid redundancy
  className="project-showcase__image"
  onClick={() => handleImageClick(index)}
/>
              <h2 className="project-showcase__title">{project.title}</h2>
              <p className="project-showcase__description">{project.description}</p>
              <p className="project-showcase__languages">Languages: {project.languages.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-showcase__link">
                <button className="project-showcase__button">View on GitHub</button>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectShowcase;
