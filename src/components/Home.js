import { Link } from "react-router-dom";
import { useState } from 'react';

import { ReactComponent as Icon1 } from '../constants/Images/Icon/icon-1.svg';
import { ReactComponent as Icon5 } from '../constants/Images/Icon/icon-5.svg';
import { ReactComponent as Icon3 } from '../constants/Images/Icon/icon-3.svg';
import vid4 from '../constants/Images/Projects/Untitled design (4).mp4';
import video from '../constants/Images/Projects/Untitled design (5).mp4';
import vid6 from '../constants/Images/Projects/Untitled design (6).mp4';
import vid8 from '../constants/Images/Projects/Untitled design (8).mp4';
import aboutImg from '../constants/Images/Web img/main-about.webp';

import Hero from './Hero';
import Counter from './Counter';
import MiniService from './MiniService';
import MiniContact from './MiniContact';

const Home = () => {
  const [serviceList] = useState([
    {
      icon: <Icon1 className='service-icon' />,
      name: 'ARCHITECTURE',
      details: 'Provides an opportunity to not only add beauty and structure to the world, but to profoundly improve the conditions for people.',
    },
    {
      icon: <Icon5 className='service-icon' />,
      name: 'INTERIOR',
      details: 'We can cater to various sectors, including residential, commercial, hospitality, and healthcare. may specialize in specific styles, such as modern, traditional, or eclectic.',
    },
    {
      icon: <Icon3 className='service-icon' />,
      name: 'CONSTRUCTION',
      details: 'Across our firm, we employ a diverse range of professionals with a successful record delivering high-quality projects.',
    },
  ]);

  return (
    <>
      <Hero />
      <div className="video-section">
        <video className='video' autoPlay muted loop>
          <source src={video} />
        </video>
      </div>
      {/* Home About */}
      <section className="home-about--section container">
        <h2>FROM UNDULATING SKYSCRAPERS TO MARVELOUS INTERIOR DESIGNS</h2>
        <div className="home-about">
          <div className="about-img">
            <img src={aboutImg} alt="Our work loading..." />
          </div>
          <div className="about-text">
            <p>The core purpose of this firm since then has been to ‘Inspire Creativity’! The Team Acity Sudio has evolved into a dedicated team of professionals committed to design excellence and offering comprehensive service in the field of Architecture, Interior Designing and Project Consultation.</p>
            <p>At Acitystudio, the Architects & the Interior Designers work in close collaboration with other experts including Engineers, Graphic Designers, Artists, Sculptures, Landscape Designers, Lighting and Acoustic Specialists.</p>
            <Link to='/about'><button className='btn'>More About Acity</button></Link>
          </div>
        </div>
      </section>
      <Counter />
      {/* Home Work */}
      <section className="work-section container">
        <h2>We engage at every scale and step of the design and construction process</h2>
        <div className="grid grid-two--col">
          <div className='work-header-1'>
            <p className='before-work-1'>INTERIOR</p>
            <h3>Interior <br /> Design</h3><br />
            <p>We can cater to various sectors, including residential, commercial, hospitality, and healthcare. may specialize in specific styles, such as modern, traditional, or eclectic, and often stay abreast of current design trends.</p>
          </div>
          <div className="work-video">
            <video className='video' autoPlay muted loop >
              <source src={vid4} />
            </video>
          </div>
        </div>
        <div className="grid grid-two-col-rev">
          <div className="work-video">
            <video className='video' autoPlay muted loop >
              <source src={vid6} />
            </video>
          </div>
          <div className='work-header-2'>
            <p className='before-work-2'>CONSTRUCTION</p>
            <h3>Giant Building <br /> In Roadway</h3><br />
            <p>Construction projects require the collaboration of skilled professionals such as architects, engineers, project managers, and skilled laborers, each contributing their expertise to ensure the successful completion of a structure.</p>
          </div>


        </div>
        <div className="grid grid-two--col">
          <div className='work-header-1'>
            <p className='before-work-1'>EXTERIOR</p>
            <h3>Exterior <br />Design</h3><br />
            <p>Architects and exterior designers collaborate to choose materials that withstand the elements while adding character and texture to the façade. The careful selection of colors and finishes further influences the overall impression.</p>
          </div>
          <div>
            <div className="work-video">
              <video className='video' autoPlay muted loop >
                <source src={vid8} />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Home Service */}
      <section className="main-service">
        <h2>A FORCE FOR ACTIVATING CITIES AND REENERGIZING CULTURES</h2>
        <button className='btn'>View More Services</button>
        <div className="service-list grid grid-three-col">
          {serviceList.map((item, id) => {
            return (
              <MiniService key={id} serviceList={item} />
            )
          })}
        </div>
      </section>
      <MiniContact />
    </>
  )
}

export default Home;