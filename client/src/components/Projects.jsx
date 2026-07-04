import { useState, useEffect } from 'react';
import { api } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await api.getProjects();
      setProjects(data);
      setError('');
    } catch (err) {
      setError('Failed to load projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading projects...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects yet. Check back soon!</p>
      ) : (
        <div className="project-grid">
          {projects.map(project => (
            <div key={project._id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.problem && <p><strong>Problem:</strong> {project.problem}</p>}
              {project.technologies && project.technologies.length > 0 && (
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech">{tech}</span>
                  ))}
                </div>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;