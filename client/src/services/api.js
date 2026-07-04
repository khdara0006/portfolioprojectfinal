// Use HTTPS for production
const API_URL = import.meta.env.VITE_API_URL || 'https://portfolio-backend-env.eba-g2k22xak.ap-southeast-2.elasticbeanstalk.com/api';

export const api = {
  // Projects
  getProjects: async () => {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },
  
  getProject: async (id) => {
    const response = await fetch(`${API_URL}/projects/${id}`);
    if (!response.ok) throw new Error('Failed to fetch project');
    return response.json();
  },
  
  addProject: async (project) => {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
    if (!response.ok) throw new Error('Failed to add project');
    return response.json();
  },
  
  updateProject: async (id, project) => {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
    if (!response.ok) throw new Error('Failed to update project');
    return response.json();
  },
  
  deleteProject: async (id) => {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete project');
    return response.json();
  },
  
  // Messages
  sendMessage: async (messageData) => {
    const response = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to send message');
    }
    return response.json();
  }
};