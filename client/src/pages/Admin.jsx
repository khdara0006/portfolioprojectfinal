import { useState, useEffect } from 'react';
import { api } from '../services/api';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    problem: '',
    technologies: '',
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    contribution: '',
    challenges: '',
    lessonsLearned: '',
    featured: false
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await api.getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
      alert('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t),
      featured: formData.featured === 'true' || formData.featured === true
    };
    
    try {
      if (editingId) {
        await api.updateProject(editingId, projectData);
        alert('Project updated!');
      } else {
        await api.addProject(projectData);
        alert('Project added!');
      }
      setFormData({
        title: '', description: '', problem: '', technologies: '',
        imageUrl: '', githubUrl: '', liveUrl: '', contribution: '',
        challenges: '', lessonsLearned: '', featured: false
      });
      setEditingId(null);
      loadProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this project?')) return;
    try {
      await api.deleteProject(id);
      alert('Project deleted!');
      loadProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title || '',
      description: project.description || '',
      problem: project.problem || '',
      technologies: project.technologies ? project.technologies.join(', ') : '',
      imageUrl: project.imageUrl || '',
      githubUrl: project.githubUrl || '',
      liveUrl: project.liveUrl || '',
      contribution: project.contribution || '',
      challenges: project.challenges || '',
      lessonsLearned: project.lessonsLearned || '',
      featured: project.featured || false
    });
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>
      
      <div className="admin-form">
        <h2>{editingId ? 'Edit Project' : 'Add New Project'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Problem</label>
            <textarea
              value={formData.problem}
              onChange={(e) => setFormData({...formData, problem: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Technologies (comma separated)</label>
            <input
              type="text"
              value={formData.technologies}
              onChange={(e) => setFormData({...formData, technologies: e.target.value})}
              placeholder="React, Node.js, MongoDB"
            />
          </div>
          
          <div className="form-group">
            <label>GitHub URL</label>
            <input
              type="text"
              value={formData.githubUrl}
              onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Live Demo URL</label>
            <input
              type="text"
              value={formData.liveUrl}
              onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Featured</label>
            <select
              value={formData.featured}
              onChange={(e) => setFormData({...formData, featured: e.target.value})}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          
          <button type="submit" className="btn-primary">
            {editingId ? 'Update' : 'Add'} Project
          </button>
          {editingId && (
            <button 
              type="button" 
              className="btn-secondary"
              onClick={() => {
                setEditingId(null);
                setFormData({
                  title: '', description: '', problem: '', technologies: '',
                  imageUrl: '', githubUrl: '', liveUrl: '', contribution: '',
                  challenges: '', lessonsLearned: '', featured: false
                });
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
      
      <div className="project-list">
        <h2>All Projects ({projects.length})</h2>
        {projects.length === 0 ? (
          <p>No projects yet. Add one above!</p>
        ) : (
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project._id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description?.slice(0, 100)}...</p>
                <div className="admin-actions">
                  <button onClick={() => handleEdit(project)}>Edit</button>
                  <button onClick={() => handleDelete(project._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;