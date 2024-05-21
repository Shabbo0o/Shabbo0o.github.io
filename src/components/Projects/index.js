import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import WarGame from '../../assets/images/war-game.jpg';
import StudentManagement from '../../assets/images/student-management.jpg';
import Pastry from '../../assets/images/pastry.jpg';
import GuessNumber from '../../assets/images/guess-number.jpg';


const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
        setShowImages(true); // Set showImages to true after 2 seconds
      }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const projectData = [
    {
      image: WarGame,
      alt: 'War Game',
      link: 'https://github.com/Shabbo0o/war-game',
    //   description: 'The provided small project represents a Python implementation of a simple card game known as "War".',
    },
    {
      image: GuessNumber,
      alt: 'Guess Number',
      link: 'https://github.com/Shabbo0o/guess-numbers-game',
    //   description: 'In this simple game based on Python, the user has to guess 3 numbers and get hints to reach the correct answer.',
    },
    {
      image: StudentManagement,
      alt: 'Student Management',
      link: 'https://github.com/Shabbo0o/student-management-system',
    //   description: 'This is a student management system. This project is developed with Django, Bootstrap, SQLite3.',
    },
    {
      image: Pastry,
      alt: 'Pastry',
      link: 'https://github.com/Shabbo0o/pastry-shop',
    //   description: 'Pastry Shop project is a web application and has been developed with HTML5, and CSS.',
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
       <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p>
            I have several projects hosted on my{' '}
            <a 
              href='https://github.com/Shabbo0o' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='a-link'>
              GitHub
            </a>{' '}
            profile. Feel free to click on each project to explore them in more detail on my GitHub page.
          </p>
        </div>
      </div> 

      <div className="img-container imagelayout">
          {showImages &&
            projectData.map((project, index) => (
                <div key={index} className={`pictexts-${index + 1}`}>
                    <div className={`box${index + 1}`}>
                        <a 
                          href={project.link} 
                          className='a-link'
                          rel='noopener noreferrer'  
                          target='_blank'>
                          <img src={project.image} alt={project.alt} width="300" height="300" />
                        </a>
                    </div>
                    <div className={`texts-${index + 1}`}>
                        <a 
                          href={project.link} 
                          className='a-link' 
                          rel='noopener noreferrer' 
                          target='_blank'>
                          <b>{project.alt}</b>
                        </a>
                        {/* <p className="desc-font">
                        <a href={project.link} className='a-link'>{project.description}</a></p> */}
                    </div>
                </div>
          ))}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
