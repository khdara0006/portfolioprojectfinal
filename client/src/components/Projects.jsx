import { useState, useEffect } from 'react';
import { api } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data || []);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  if (loading) return <div className="loading">Loading projects...</div>;

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <div className="no-projects">
          <p>No projects yet. Check back soon!</p>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map(project => (
            <div key={project._id || project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;