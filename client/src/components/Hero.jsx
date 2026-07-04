const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hout Khongdara</h1>
          <h2>Year 2 Software Engineering Student</h2>
          <p>
            I am passionate about web development and software engineering. 
            This portfolio showcases my skills, projects, and academic journey 
            as I prepare for scholarship and exchange opportunities.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">View Projects</button>
            <button className="btn-secondary">Download CV</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/portfolio-profile.jpg" alt="Hout Khongdara" />
        </div>
      </div>
    </section>
  );
};

export default Hero;