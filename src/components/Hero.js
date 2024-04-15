const Hero = () => {

  return (
    <div className="hero-section">
      <div className="container">
        <div className="main-heading">
          <h1>Dreams made into Reality</h1>
          <p>Interiors are the essential settings of life, shaping how people  <br />
            work, play and learn
          </p>
          <p>Together we ensure thateach building fulfills theirneeds and <br />
            goals, as unique manifestations of brand, mission and values
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
              <input type="text" name="Msg" placeholder="Tell us your Requirements" required/>
            </fieldset>
            <button className="form-btn">GET FREE QUOTE</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Hero;