import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import WarGame from '../../assets/images/war-game.jpg';
import StudentManagement from '../../assets/images/student-management.png';
import Pastry from '../../assets/images/pastry.jpg';
import GuessNumber from '../../assets/images/guess-number.png';
import TodoList from '../../assets/images/react-todo-list.png';
import AITravel from '../../assets/images/ai-travel.png';
import Bank from '../../assets/images/bank-site.png';
import News from '../../assets/images/news-website.png';

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
      image: Bank,
      alt: 'Bank site',
      link: 'https://github.com/Shabbo0o/bank',
    //   description: 'This is a simple bank application built with a Node.js backend and a Next.js frontend. The application allows users to register, log in, view their account balance, and perform transactions like depositing money.',
    },
    {
      image: AITravel,
      alt: 'AI Travel',
      link: 'https://github.com/Shabbo0o/ai-travel',
    //   description: 'This project is an AI-powered Travel Guide that generates detailed travel plans and translates common phrases into the local language of a specified city or country.',
    },
    {
      image: TodoList,
      alt: 'Todo List',
      link: 'https://github.com/Shabbo0o/react-todo-list',
    //   description: 'The provided small project represents a Python implementation of a simple card game known as "War".',
    },
    {
      image: GuessNumber,
      alt: 'Guess Number',
      link: 'https://github.com/Shabbo0o/GuessingGame',
    //   description: 'This is a simple number guessing game built with React Native and Expo.',
    },
    {
      image: News,
      alt: 'News Website',
      link: 'https://github.com/Shabbo0o/news-website',
    //   description: 'A dynamic news platform built with Next.js that fetches real-time news articles from the NewsData.io API.',
    },
    {
      image: WarGame,
      alt: 'War Game',
      link: 'https://github.com/Shabbo0o/war-game',
    //   description: 'The provided small project represents a Python implementation of a simple card game known as "War".',
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
      <div className="projects-page  ">
        <div className="text-zone header-container">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={8}
            />
          </h1>
          <p className='desktop-mode'>
          Here are some of the applications I’ve developed using React, React Native, Python, and Django. These projects reflect my skills in full-stack development, UI/UX design, and problem-solving.
          You can find more projects and experiments on my {' '}
            <a 
              href='https://github.com/Shabbo0o' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='a-link'>
              GitHub
            </a>{' '}
            as well.
          </p>
          <p><a 
              href='https://github.com/Shabbo0o' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='a-link'>
              My GitHub
            </a>
          </p>
          <div className='stage-cube-cont header-image'>
            <div className='cubespinner'>
              <div className='face1'><FontAwesomeIcon icon={faCss3} /></div>
              <div className='face2'><FontAwesomeIcon icon={faReact} /></div>
              <div className='face3'><FontAwesomeIcon icon={faJsSquare} /></div>
              <div className='face4'><FontAwesomeIcon icon={faDatabase} /></div>
              <div className='face5'><FontAwesomeIcon icon={faPython} /></div>
              <div className='face6'><FontAwesomeIcon icon={faBootstrap} /></div>
            </div>
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
    </div> 
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
