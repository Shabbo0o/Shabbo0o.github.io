import { Link } from 'react-router-dom'; 
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import LogoSubtitle from '../../assets/images/logo-subtitle.png';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'S', 'h', 'a', 'b', 'b', 'o', 'o'];
    const jobArray = ['A', ' ', 'F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ','D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.' ];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeoutId);
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
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={21} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
                    </h1>

                    <h2 className="desktop-sub">
                    Specialized in React and React Native.<br />
                    I build modern, user-friendly apps for web and mobile.
                    </h2>
                    {/* <h2 className='gold-color'>Full Stack Software Engineer</h2> */}
                    {/* <h1 className="desktop-title"> */}
                    {/* Hi, <br />
                    I'm Shabboo <br />
                    <span className="emphasis">A Frontend Developer</span>
                    </h1>
                    <p className="desktop-sub">
                    Specialized in React and React Native.<br />
                    I build modern, user-friendly apps for web and mobile.
                    </p>

                    // Mobile version
                    <div className="mobile-title">
                    <h1>Hi, I'm Shabboo</h1>
                    <h2 className="gold-color">Frontend Developer – React & React Native</h2>
                    <p className="mobile-sub">Creating responsive, user-centered web & mobile apps.</p>
                    </div> */}
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner-home'>
                        <div className='face1-home'><FontAwesomeIcon icon={faCss3} color='#264de4' /></div>
                        <div className='face2-home'><FontAwesomeIcon icon={faReact} color='#5ED4F4' /></div>
                        <div className='face3-home'><FontAwesomeIcon icon={faJsSquare} color='#EFD81D' /></div>
                        <div className='face4-home'><FontAwesomeIcon icon={faDatabase} color='#F29111' /></div>
                        <div className='face5-home'><FontAwesomeIcon icon={faPython} color='#EC4D28' /></div>
                        <div className='face6-home'><FontAwesomeIcon icon={faBootstrap} color='#563d7c' /></div>
                    </div>
                </div>

                <div className="mobile-photo">
                    {/* <img src="/images/shabboo.jpg" alt="Shabboo" /> */}
                    {/* <img src="../../assets/images/shabboo.jpg" alt="Shabboo" /> */}
                    <img className='sub-logo my-img ' src={LogoSubtitle} alt='shabbooLogo' />
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
};

export default Home;
