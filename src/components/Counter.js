const Counter = () => {
  return (
    <section className="counter-section">
      <h2>A SUMMARY OF OUR CHALLENGES TRANSLATED INTO NUMBERS</h2>
      <div className="container">
        <div className="counter-text">
          <p className='total-years'>09</p>
          <p>years of transforming places and <br /> creating plans that improve life</p>
        </div>
        <div className="grid grid-two-col">
          <div>
            <p>25+</p>
            <p>Certified Engineers</p>
          </div>
          <div>
            <p>150+</p>
            <p>Happy Clients</p>
          </div>
          <div>
            <p>15+</p>
            <p>Ongoing Projects</p>
          </div>
          <div>
            <p>200+</p>
            <p>Projects Done</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Counter;