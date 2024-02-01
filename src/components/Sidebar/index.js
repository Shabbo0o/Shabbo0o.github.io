import {Link, NavLink } from 'react-router-dom'
import './index.scss';
// import LogoSh from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo-subtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';

// Example import statement
// import { faSomeIcon } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        {/* <img src={LogoSh} alt='logo' /> */}
        <img className='sub-logo' src={LogoSubtitle} alt='shabbooLogo' />
        </Link>
        <nav>
            <NavLink 
                exact='true' 
                activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname="active" 
                className="about-link" 
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink> 
            <NavLink 
                exact='true' 
                activeclassname="active" 
                className="contact-link" 
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink> 
            <NavLink 
                exact='true' 
                activeclassname="active" 
                className="projects-link" 
                to="/projects"
            >
            
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </NavLink>
            <ul>
                <li>
                    <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/shabboo-zamanian/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/Shabbo0o'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                {/* <li>
                    <a
                    target='_blank'
                    rel='noreferrer'
                    href='live:shabboo.zamanian'
                    >
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li> */}
            </ul>
        </nav>
    </div>
    )
}

export default Sidebar;
