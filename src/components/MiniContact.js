import { Link } from 'react-router-dom';

const MiniContact = () => {
  return (
    <section className="mini-contact-section">
      <div className="container">
        <h2>Let’s help your business by unleashing the power of structural design</h2>
        <h3>OUR WORK IS DEFINED BY SO MUCH MORE THAN JUST RECOGNITION</h3>
        <p>We’re architects, planners, engineers, strategists and industry specialists spanning hundreds of disciplines.</p>
        <div className="btn-1">
          <Link to='/contact'><button className='btn'>Join our Company</button></Link>
        </div>
        <div className="btn-2">
          <Link to='/contact'><button className='btn'>Contact us</button></Link>
        </div>
      </div>
    </section>
  )
}

export default MiniContact
