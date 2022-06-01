import '../styles/info.css';
import ProfilePic from '../assets/profile-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

function Info() {
  return (
    <div className="Info">
        <img src={ProfilePic} alt="Profile picture" />

        {/* Card Info */}
        <h2 className="Info--name">Laura Smith</h2>
        <h5 className="Info--designation">Frontend Developer</h5>
        <h6 className="Info--website">laurasmith.website</h6>
        
        {/* Buttons */}
        <div className="Info--buttons">
          <div className="Info--buttons-email">
            <FontAwesomeIcon icon={faEnvelope} />
            <h5>Email</h5>
          </div>
          <div className="Info--buttons-linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
            <h5>Linkedin</h5>
          </div>
        </div>

        {/* About */}
        <div className="Info--about">
          <h4 className="Info--about_title">About</h4>
          <h6 className="Info--about_description">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</h6>
        </div>

        {/* Interest */}
        <div className="Info--about">
          <h4 className="Info--about_title">Interests</h4>
          <h6 className="Info--about_description">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</h6>
        </div>

        {/* Footer */}
        <div className="Info--footer">
          <FontAwesomeIcon className="Info--footer_icon" icon={faTwitterSquare} />
          <FontAwesomeIcon className="Info--footer_icon" icon={faFacebookSquare} />
          <FontAwesomeIcon className="Info--footer_icon" icon={faInstagramSquare} />
          <FontAwesomeIcon className="Info--footer_icon" icon={faGithubSquare} />
        </div>
    </div>
  );
}

export default Info;