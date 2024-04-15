import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../constants/Images/Logo/logo.webp';

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);

  const fixedOnScroll = () => {
    if (window.scrollY >= 100) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  window.addEventListener("scroll", fixedOnScroll);

  return (
    <div className="header-section">
      <div className="welcome-section">
        <div className="container">
          <div className="welcome-text">
            <p>Welcome to Acity Studio</p>
          </div>
          <div className="welcome-media">
            <ul>
              <li>Follow us</li>
              <li>
                <a
                  href="https://www.facebook.com/Acitystudio2020?mibextid=ZbWKwL"
                  target="_acitystudio">
                  <i className="fa-brands fa-facebook-f media-icon"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/acity_studio/"
                  target="_acitystudio">
                  <i className="fa-brands fa-instagram media-icon"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/acity-studio/mycompany/"
                  target="_acitystudio">
                  <i className="fa-brands fa-linkedin media-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <nav className={fixedHeader ? 'main-nav fixed' : 'main-nav'}>
        <div className="container">
          <div className="logo">
            <Link to='/'><img className='logo-img' src={logo} alt="Acity Studio Logo" /></Link>
          </div>
          <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="social-media">
            <div className="hamburger-menu">
              <i className="fa-solid fa-bars hamburger" onClick={() => setShowMediaIcons(!showMediaIcons)}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;