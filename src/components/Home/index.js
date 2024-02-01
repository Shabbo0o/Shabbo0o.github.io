// import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'; 
import './index.scss';
import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from '../Logo';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'S', 'h', 'a', 'b', 'b', 'o', 'o']
    const jobArray = ['A', ' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e','r', '.' ]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
            return () => {
          clearTimeout(timeoutId);
        };
      }, []); 

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                {/* <img src={LogoTitle} alt="developer" /> */}
                <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray}
                    idx={25}
                />
                </h1>
                <h2>Full Stack Software Engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        <div className='stage-cube-cont-home'>
            <div className='cubespinner-home'>
                {/* <div className='face1-home'>
                    <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                </div> */}
                <div className='face1-home'>
                    <FontAwesomeIcon icon={faCss3} color='#264de4' />
                </div>
                <div className='face2-home'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face3-home'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face4-home'>
                    <FontAwesomeIcon icon={faDatabase} color='#F29111' />
                </div>
                <div className='face5-home'>
                    <FontAwesomeIcon icon={faPython} color='#EC4D28' />
                </div>
                <div className='face6-home'>
                    <FontAwesomeIcon icon={faBootstrap} color='#563d7c' />
                </div>
                {/* <div className='face6-home'>
                    <FontAwesomeIcon icon={faGithub} color='#EC4D28' />
                </div> */}
            </div>

        </div>
            {/* <Logo /> */}
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home;