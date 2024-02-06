import { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showMoreExperience, setShowMoreExperience] = useState(false);
  // const [showMoreEducation, setShowMoreEducation] = useState(false);

  const experienceArr = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's']
  const educationArr = ['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const toggleMoreExperience = () => {
    setShowMoreExperience(!showMoreExperience);
  };

  // const toggleMoreEducation = () => {
  //   setShowMoreEducation(!showMoreEducation);
  // };


  const renderExperienceParagraphs = () => {
    const allParagraphs = [
      `Python programming basics: HTML, CSS, JavaScript, Python, Scum/Agile, UI/UX, GitHub.
      Python programming Advanced: Object Oriented, Web development, Django.
      Database: SQL, NoSQL, MongoDB, MySQL, SQLite.
      IT-security: Penetration testing, Ethical Hacking, SQL injections, Social Engineering.
      Virtual Machines, Kali-Linux.
      Cloud services: Azure, Repl.it, DevOps, Docker.`,
      `Working with <b>visual editors</b> like <b>Webflow</b> enriched my <b>frontend development</b> skills. This journey, from intern to project leader, has honed my leadership and technical abilities, making me adept for a frontend developer role.`,
      `I was responsible and a lead for the Requirement Analysis, <b>Database Design</b>, creating the <b>Use Case documents</b>, <b>Class diagram</b>, Test Case, and other relevant subjects.`
    

     // `- <b>Technologies</b>: Python, Django, JavaScript, ReactJS, UI/UX.
     //  - <b>Methodology</b>: Scrum/Agile, GitHub.
     //  - <b>Database</b>: MySQL, MongoDB, SQLite.
     //  - <b>IT security</b>: Penetration testing, Ethical Hacking, SQL injections, Social Engineering, Virtual Machines, Kali-Linux.
     //  - <b>Cloud services</b>: Azure, Repl.it, DevOps, Docker.
     //  - An E-Commerce Project: I am writing an e-commerce site using Django, JavaScript, HTML, CSS, and MySQL.
     //  - Portfolio: A portfolio project, written in ReactJS. Link in my Github profile page.
     //  - A frontend project for a hypothetical restaurant, written in JavaScript, and BootStrap.`
     //  ];

    
    // if (showMoreExperience) {
    //   return paragraphs.map((sentence, index) => <p key={index}>{sentence}</p>);
    // } else {
    //   return <p>{paragraphs[0]} <span onClick={toggleMoreExperience} className="more-link">More</span></p>;
    // }
    const maxIndex = showMoreExperience ? allParagraphs.length : 1;

    return allParagraphs.slice(0, maxIndex).map((sentence, index) => (
      <p key={index}>{sentence}</p>
    ));
  };

  // const renderEducationParagraphs = () => {
  //   const paragraphs = [
  //     "Python and IT security program.",
  //     "Social Media and Web Technologies. M.Sc.",
  //     "Management and Productivity. M.Sc.",
  //     "Computer Science. B.Sc.",
  //     // Add more sentences as needed
  //   ];

  //   if (showMoreEducation) {
  //     return paragraphs.map((sentence, index) => <p key={index}>{sentence}</p>);
  //   } else {
  //     return <p>{paragraphs[0]} <span onClick={toggleMoreEducation} className="more-link">More</span></p>;
  //   }
  // };

  return (
      <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArr}
            
            idx={15}
          />
        </h1>
        <h2>
          Lexicon AB / Stockholm / Sep 2023 - Present
        </h2>
        <p>I am working in a boot camp, where I am enhancing my skills in front-end, back-end, cloud, security, and more. 
        <br></br>
        <b>Python programming basics:</b> HTML, CSS, JavaScript, Python, Scum/Agile, UI/UX, GitHub.
        <br></br>
        <b>Python programming Advanced:</b> Object Oriented, Web development, Django.
        <br></br>
        <b>Database:</b> SQL, NoSQL, MongoDB, MySQL, SQLite.
        <br></br>
        <b>IT-security:</b> Penetration testing, Ethical Hacking, SQL injections, Social Engineering. Virtual Machines, Kali-Linux.
        <br></br>
        <b>Cloud services:</b> Azure, Repl.it, DevOps, Docker.
        {/* <a href='#'>More</a> */}
        </p>
        {/* <p>
            {showMoreExperience ? null : (
              <span onClick={toggleMoreExperience} className="more-link">
                More
              </span>
            )}
          </p>*/}
        <h2>
          Sweville / Stockholm / Jan 2023 - Apr 2023
        </h2>
        <p>I started as an intern at a startup, analyzing progress and testing. Recognizing my performance, I became the leader for an EdTech platform project. 
        {/* <a href='#'>More</a> */}
        </p>
        <h2>
          Dade Pardazi Kharazmi / Tehran - Iran / 2013 - 2015
        </h2>
        <p>I served as a business analyst in the ﬁnancial sector. Our clients were major banks in Iran and I was involved in multiple projects. I was responsible and a lead for the Requirement Analysis, <b>Database Design</b>, creating the <b>Use Case documents</b>, <b>Class diagram</b>, Test Case, and other relevant subjects.
        {/* <a href='#'>More</a> */}
        </p>
        <h2>
          Torfe Negar / Tehran - Iran / 2011 - 2013
        </h2>
        <p>Analysing Logistic and Financial Systems.  Testing the software to verify that it meets the demands of the requirements.</p>
        <h2>
          Rahnemoode Faragir / Tehran - Iran / 2009 - 2011
        </h2>
        <p>Developing financial and HR systems. Working with Delphi and SQL Server. The work involved highly complex SQL queries and procedures as means to create many heavy-loaded ﬁnancial reports.</p>
        <h1>
          <AnimatedLetters
                letterClass={letterClass}
                strArray={educationArr}
              
              idx={18}
          />
        </h1>
        <h2>
        Lexicon AB / Sweden / 2023 - Present
        </h2>
        <p>Python and IT security program.</p>
        <h2>
        Linnaeus University / Sweden / 2021 - Present
        </h2>
        <p>Social Media and Web Technologies. M.Sc.</p>
        <h2>
        Iran University of Science and Technology University / Iran / 2012 - 2013
        </h2>
        <p>Management and Productivity. M.Sc.</p>
        <h2>
          Azad University / Iran / 2003 - 2008
        </h2>
        <p>Computer Science. B.Sc.</p>
        <br/>
        <br/><br/>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            {/* <div className='face1'>
                <FontAwesomeIcon icon={faHtml5} color='#f06529' />
            </div> */}
            <div className='face1'>
                <FontAwesomeIcon icon={faCss3} color='#264de4' />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faDatabase} color='#F29111' />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faPython} color='#EC4D28' />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faBootstrap} color='#563d7c' />
            </div>
            {/* <div className='face6'>
                <FontAwesomeIcon icon={faGithub} color='#EC4D28' />
            </div> */}
        </div>

      </div>

      <br></br>
      
    </div>
    <Loader type='pacman' />
    </>
  );
};

export default About;
