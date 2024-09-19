const Hero = () => {

  return (
    <div className="hero-section">
      <div className="container">
        <div className="main-heading">
          <h1>Dreams Made into Reality</h1>
          <p>Together we ensure that each building fulfills their needs and <br />
            goals, as unique manifestations of brand, mission and values...
          </p>
          <p>Interiors are the essential settings of life, shaping how people  <br />
            work, play and learn...
          </p>
          <a href="https://wa.me/919205001994" target='_blank' rel="noreferrer"><button className="whatsapp-btn"><i className="fa-brands fa-whatsapp"></i>Whatsapp now</button></a>
        </div>
        <div className="popup-form">
          <h2>Designs for Every Budget</h2>
          <form action="https://formspree.io/f/xnqegkno" method="POST">
            <fieldset>
              <legend>Name*</legend>
              <input type="text" name="Name" placeholder="Name" required/>
            </fieldset>
            <fieldset>
              <legend>Phone Number*</legend>
              <input type="tel" name="Phone" placeholder="Phone Number" required/>
            </fieldset>
            <fieldset>
              <legend>Property Details*</legend>
              <textarea name="Msg" placeholder="Tell us your Requirements" required></textarea>
            </fieldset>
            <button className="form-btn">GET FREE QUOTE</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Hero;