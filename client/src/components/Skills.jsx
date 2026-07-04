const Skills = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Node.js', 'MongoDB'];
  
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;