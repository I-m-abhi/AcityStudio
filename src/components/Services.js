import { Link } from 'react-router-dom';
import interiorImage from '../constants/Images/Projects/img1.webp';
import { ReactComponent as Icon1 } from '../constants/Images/Icon/icon-1.svg';
import { ReactComponent as Icon2 } from '../constants/Images/Icon/icon-2.svg';
import { ReactComponent as Icon3 } from '../constants/Images/Icon/icon-3.svg';
import { ReactComponent as Icon4 } from '../constants/Images/Icon/icon-4.svg';
import { ReactComponent as Icon5 } from '../constants/Images/Icon/icon-5.svg';
import { ReactComponent as Icon6 } from '../constants/Images/Icon/icon-6.svg';
import MiniContact from './MiniContact';
import MiniService from './MiniService';
import { useState } from 'react';

const Services = () => {
  const [serviceList] = useState([
    {
      icon: <Icon1 className='service-icon' />,
      name: 'ARCHITECTURE',
      details: 'Provides an opportunity to not only add beauty and structure to the world, but to profoundly improve the conditions for people.',
    },
    {
      icon: <Icon2 className='service-icon' />,
      name: 'CONSULTING & PLANNING',
      details: 'Our team’s analytical tools and user engagement activities inspire creativity and collaboration that enhance any project.',
    },
    {
      icon: <Icon3 className='service-icon' />,
      name: 'CONSTRUCTION',
      details: 'Across our firm, we employ a diverse range of professionals with a successful record delivering high-quality projects.',
    },
    {
      icon: <Icon4 className='service-icon' />,
      name: 'ENGINEERING',
      details: 'We create innovative engineering systems that help organizations achieve bold business and performance goals.',
    },
    {
      icon: <Icon5 className='service-icon' />,
      name: 'INTERIOR',
      details: 'We can cater to various sectors, including residential, commercial, hospitality, and healthcare. may specialize in specific styles, such as modern, traditional, or eclectic.',
    },
    {
      icon: <Icon6 className='service-icon' />,
      name: 'FACILITY OPTIMIZATION',
      details: 'We can efficiently create a living dataset of your assets and integrate into your computerized maintenance management.',
    },
  ]);

  return (
    <>
      <section className="page-title">
        <ul className="bread-crumb">
          <li><h1>Services</h1></li>
          <li className='bread-crumb-list'>
            <Link className='page-link' to="/">Home</Link>
          </li>
          <li className='bread-crumb-list'>/ Services</li>
        </ul>
      </section>
      {/* Services Creative */}
      <section className="creative-section container">
        <h2>Creative Solutions by Professional Designers.</h2>
        <div className="creative-services">
          <div>
          <img className='creative-img' src={interiorImage} alt="Interior Sample" />
          </div>
          <div className="creative-text">
            <br />
            <p>Looking for a luxurious and <span style={{ color: '#3f51b5' }}>high-end interior designer in Noida or Delhi NCR?</span> Look no further! At High Creation Interior, our team of experienced and talented designers is here to help you create a space that reflects your unique style and taste.</p>
            <br />
            <p>As the <span style={{ color: '#3f51b5' }}>best interior designer in Noida and Delhi NCR</span>, we specialize in luxury interior design, with a focus on creating stunning spaces that are both functional and beautiful. From selecting the perfect color palette to choosing the right furniture and accessories, we take care of every detail to ensure that your space is truly exceptional.</p>
          </div>
        </div>
      </section>
      <section className="service-section container">
        <h2>We believe architecture is critically important to addressing <br />
          the most pressing challenges of our time</h2>
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

export default Services;