import { Link } from 'react-router-dom';
import { teamSkilled } from '../constants/constant';
import imageContent from '../constants/Images/Web img/about-2.webp'
import tm2 from '../constants/Images/TeamMember/2.webp';
import MiniContact from './MiniContact';

const About = () => {
  return (
    <>
      <section className="page-title">
        <ul className="bread-crumb">
          <li><h1>About us</h1></li>
          <li className='bread-crumb-list'>
            <Link className='page-link' to="/">Home</Link>
          </li>
          <li className='bread-crumb-list'>/ About us</li>
        </ul>
      </section>
      {/* About Section */}
      <section className="about-section grid grid-two-col container">
        <div className="about-content">
          <h2>CREATING STRUCTURES THAT INSPIRE AND SERVE</h2>
          <p>We engage at every scale and step of the design and construction process, working with local communities upfront on land use issues, devising efficient delivery methods, and everything in between.
            <br /><br />
            Whether reimagining an existing structure or crafting a new one, our approach realizes a building’s highest value. In the end, each client’s solution is unique to them and responsive to context, program and people.
          </p>
        </div>
        <div className="about-img">
        <img className='image-content' src={imageContent} alt="about content" />
        </div>
      </section>
      {/* Skilled Section */}
      <section className="skilled-section grid grid-two-col container">
        <div>
          <h2>We Have Highly  Skilled <br /> Professional Team</h2>
          <p>Our team is comprised of experienced architects, designers, and project managers who share a common goal of creating exceptional spaces.</p></div>
        <div>
          {teamSkilled.map((item, id) => {
            return (
              <div key={id} className='grid'>
                <h4>{item.position}</h4>
                <p>{item.percent}</p>
                <div className="percent-color-box"><div className="percent-color" style={{ width: `${item.percent}%` }}></div></div>
              </div>
            )
          })}
        </div>
      </section>
      {/* Vision Section */}
      <section className="vision-section">
        <div className="container grid grid-three-col">
        <div className="vision-box">
          <h3>OUR MISSION</h3>
          <p>We commit to inspiring our people to be the best they can be, empowering them to design a world that prioritizes the human experience.</p>
        </div>
        <div className="vision-box">
          <h3>OUR VISION</h3>
          <p>We confidently accept our role as trusted expert partner to our clients, guiding them to business success.</p>
        </div>
        <div className="vision-box">
          <h3>OUR STRATEGIES</h3>
          <p>We challenge ourselves to continue to earn our position as industry leaders in hospitality, multi-family residential, and affordable housing design.</p>
        </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="founder-section container">
        <h2>Meet the Founder</h2>
        <div className="founder">
          <div className="founderImg">
            <img className="founder-img" src={tm2} alt="Founder" />
            <h4>SAWAN KUMAR</h4>
            <p>Founder & Architect Designer</p>
          </div>
          <div className="founder-text">
            <p>Hello, I am the Founder Architect of the design firm AcityStudio, which is affiliated with the Council of Architecture, Indian BIM Forum and Association of Designers of India. Upase believes that architectural design should be always people-centric. The firm designs residential, institutional and commercial spaces ranging from 500 – 1,00,000+ Sq ft building footprint area with economical and innovative thoughtful architectural solutions in adherence to Vaastu principles, offering urban planning, architectural and interior design solutions. Ar Sawan Kumar is open to work for oversea projects for architectural design and BIM-related services and also provides architectural design and execution of works. The firm, AcityStudio, has expertise in BIM (architectural and MEP Revit) outsourcing services too.</p>
          </div>
        </div>
      </section>
      <MiniContact />
    </>
  )
}

export default About;