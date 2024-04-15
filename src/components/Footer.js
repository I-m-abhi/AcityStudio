import logo from '../constants/Images/Logo/logo-ff-bg.webp'

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="main-footer">
        <div className="footer-logo">
          <img className='logo-img' src={logo} alt="Acity Studio Logo" />
          <br />
          <p>Architecture provides an opportunity to improve the <br /> conditions for people, communities, society, businesses <br /> and the environment.</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Details</h3>
          <br />
          <p><span>Email : </span>core@acitystudio.in</p>
          <p><span>Phone : </span>+91 9205001994</p>
          <p><span>Address : </span>Coco County, Greater Noida, UP</p>
        </div>
        <div className="footer-media">
          <h3>Follow us</h3>
          <br />
          <ul>
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
      <hr />
      <div className="bottom-footer">
        <div className="copyright">
          <p>Copyright &#169; 2024 Acity Studio. All Rights Reserved.</p>
        </div>
        <ul className="terms-condition">
          <li>Privacy Policy</li>
          <li>Conditions & Terms</li>
          <li>FAQ’s</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;