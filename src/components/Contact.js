import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <section className="page-title">
        <ul className="bread-crumb">
          <li><h1>Contact us</h1></li>
          <li className='bread-crumb-list'>
            <Link className='page-link' to="/">Home</Link>
          </li>
          <li className='bread-crumb-list'>/ Contact us</li>
        </ul>
      </section>
      {/* Contact Section */}
      <section className="address-section container">
        <h2>OUR OFFICE LOCATIONS</h2>
        <div className="grid grid-three-col">
          <div className="address">
            <div className="address-item">
              <div className="circle"><i className="fa-solid fa-location-dot icon-size"></i></div>
              <div>
                <h3>ADDRESS</h3>
                <p>Coco County, Noida(UP)</p>
              </div>
            </div>
            <div className="address-item">
              <div className="circle"><i className="fa-solid fa-phone icon-size"></i></div>
              <div>
                <h3>PHONE</h3>
                <p>+91 9205001994</p>
              </div>
            </div>
            <div className="address-item">
              <div className="circle"><i className="fa-regular fa-envelope icon-size"></i></div>
              <div>
                <h3>MAIL</h3>
                <p>core@acitystudio.in</p>
              </div>
            </div>
          </div>
          <div className="address">
            <div className="address-item">
              <div className="circle"><i className="fa-solid fa-location-dot icon-size"></i></div>
              <div>
                <h3>ADDRESS</h3>
                <p>Pachpedi Naka, Raipur(CG)</p>  , 

              </div>
            </div>
            <div className="address-item">
              <div className="circle"><i className="fa-solid fa-phone icon-size"></i></div>
              <div>
                <h3>PHONE</h3>
                <p>+91 8319407764</p>
              </div>
            </div>
            <div className="address-item">
              <div className="circle"><i className="fa-regular fa-envelope icon-size"></i></div>
              <div>
                <h3>MAIL</h3>
                <p>core@acitystudio.in</p>
              </div>
            </div>
          </div>
          <div className="address">
            <div className="address-item">
              <div className="circle"><i className="fa-solid fa-location-dot icon-size"></i></div>
              <div>
                <h3>ADDRESS</h3>
                <p>Anishabad, Patna(Bihar)</p>
              </div>
            </div>
            <div className="address-item">
              <div className="circle"><i className="fa-solid fa-phone icon-size"></i></div>
              <div>
                <h3>PHONE</h3>
                <p>+91 9205001994</p>
              </div>
            </div>
            <div className="address-item">
              <div className="circle"><i className="fa-regular fa-envelope icon-size"></i></div>
              <div>
                <h3>MAIL</h3>
                <p>core@acitystudio.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2>Get in touch with us. We are always here to help you...</h2>
        <form action="https://formspree.io/f/xnqegkno" method="POST">
          <div><label htmlFor="username">Enter Your Name*</label></div> <br />
          <input type="text" name="username" id="username" required autoComplete='off' /> <br />
          <div><label htmlFor="email">Enter Your Email*</label></div> <br />
          <input type="email" name="email" id="email" required autoComplete='off' /> <br />
          <div><label htmlFor="mobile">Enter Your Mobile*</label></div> <br />
          <input type="number" name="mobile" id="mobile" required autoComplete='off' /> <br />
          <div><label htmlFor="message">Enter Your Message</label></div> <br />
          <textarea name="message" id="message" cols="30" rows="3"></textarea> <br />
          <div><button className='btn' type="submit" >Send Message</button></div>
        </form>
      </section>
    </>
  )
}

export default Contact;