import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/sarah_logo-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faCertificate,
  faCode,
  faFileText,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="award-link"
            to="/Award"
          >

            <FontAwesomeIcon icon={faCertificate} color="#4d4d4e"  />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="work-link"
            to="/Work"
          >

            <FontAwesomeIcon icon={faCode} color="#4d4d4e"  />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="resume-link"
            to="/Resume"
          >

            <FontAwesomeIcon icon={faFileText} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >

            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>

          
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/sarah-qasim-6392bb287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >

              
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SarahQasim29"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
        
        </ul>
      </div>
    </>
  )
}

export default Sidebar
