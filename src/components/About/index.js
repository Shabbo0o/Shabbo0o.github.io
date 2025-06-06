import { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [activeTab, setActiveTab] = useState('experience');
  const isMobile = window.innerWidth <= 768;

  const experienceArr = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];
  const educationArr = ['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const renderExperience = () => (
    <>
      <h2 className='job-title'>Yayloh / Stockholm / Feb 2024 - Apr 2024</h2>
      <p><b>- Tekniker:</b> Python, Django, JavaScript, ReactJS, UI/UX.<br /><b>- Metodik:</b> Scrum/Agile, GitHub.<br /><b>- Databas:</b> MySQL.</p>
      <h2>Sweville / Stockholm / Jan 2023 - Apr 2023</h2>
      <p><b>-Testning</b><br /><b>-Webflow</b></p>
      <h2>Dade Pardazi Kharazmi / Tehran - Iran / Aug 2013 - Apr 2018</h2>
      <p>I served as a business analyst...<br /><b>- Database designing</b><br /><b>- Reverse engineering</b><br /><b>- SSIS & Test</b></p>
      <h2>Torfe Negar / Tehran - Iran / May 2011 - Jul 2013</h2>
      <p>- Analysing <b>Logistic and Financial</b> Systems.<br></br><b>- Testing </b><br></br></p>
      <h2>Rahnemoode Faragir / Tehran - Iran / Sep 2009 - Apr 2011</h2>
      <p><b>- Software developer: Developing financial and HR systems. </b><br></br><b>- SQL Server</b><br></br><b>- Testing</b><br></br></p>
    </>
  );

  const renderEducation = () => (
    <>
      <h2>Chas Academy / Sweden / Sep 2024 - Jun 2026</h2>
      <p><b>Front-end Developer.</b></p>
      <p>- JavaScript, ReactJS, ReactNative, TypeScript, NodeJS, NextJS</p>
      <p>- UI/UX, Figma, Tailwind</p>
      <p>- Scrum/Agile, GitHub, GitLab</p>
      <p>- MySQL</p>
      <p>- AWS</p>
      <h2>Lexicon AB / Sweden / Sep 2023 - Feb 2024</h2>
      <p>Python and IT security program.</p>
      <h2>Linnaeus University / Sweden / Jan 2021 - Aug 2023</h2>
      <p>Social Media and Web Technologies. M.Sc.</p>
      <h2>Iran University of Science and Technology / Iran / Jan 2012 - Aug 2013</h2>
      <p>Management and Productivity. M.Sc.</p>
      <h2>Azad University / Iran / Sep 2003 - Jun 2008</h2>
      <p>Computer Science. B.Sc.</p>
    </>
  );

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="section-heading">
            {isMobile ? activeTab.charAt(0).toUpperCase() + activeTab.slice(1) : (
              <AnimatedLetters letterClass={letterClass} strArray={activeTab === 'experience' ? experienceArr : educationArr} idx={15} />
            )}
          </h1>

          <div className="tabs ">
            <button
              className={activeTab === 'experience' ? 'active' : ''}
              onClick={() => setActiveTab('experience')}
            >Experience</button>
            <button
              className={activeTab === 'education' ? 'active' : ''}
              onClick={() => setActiveTab('education')}
            >Education</button>
          </div>

          <div className="tab-content">
            {activeTab === 'experience' ? renderExperience() : renderEducation()}
          </div>
        </div>

        <div className='stage-cube-cont'>
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
      <Loader type='pacman' />
    </>
  );
};

export default About;
