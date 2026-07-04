const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Restaurant Management System</h3>
          <p>A web application developed as a group project to manage restaurant operations efficiently.</p>
          <ul>
            <li>Menu Management</li>
            <li>Order Management</li>
            <li>Reservation System</li>
            <li>IT Management</li>
          </ul>
          <div className="tech">React • Node.js • Express • MySQL</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;