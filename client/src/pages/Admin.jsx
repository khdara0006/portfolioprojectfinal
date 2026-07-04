import { useState } from 'react';

const Admin = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Project added! (API will be connected later)');
    console.log('Form data:', formData);
  };

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>
      
      <div className="admin-form">
        <h2>Add New Project</h2>
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
            <label>Technologies (comma separated)</label>
            <input
              type="text"
              value={formData.technologies}
              onChange={(e) => setFormData({...formData, technologies: e.target.value})}
              placeholder="React, Node.js, MongoDB"
            />
          </div>
          
          <button type="submit" className="btn-primary">Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;