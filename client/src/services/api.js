const API_URL = 'https://portfolio-backend-env.eba-g2k22xak.ap-southeast-2.elasticbeanstalk.com/api';

export const api = {
  getProjects: async () => {
    try {
      const response = await fetch(`${API_URL}/projects`);
      if (!response.ok) throw new Error('Failed to fetch projects');
      return response.json();
    } catch (error) {
      console.error('API Error:', error);
      return [];
    }
  },
  
  addProject: async (project) => {
    try {
      const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      });
      if (!response.ok) throw new Error('Failed to add project');
      return response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
  
  deleteProject: async (id) => {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete project');
      return response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
  
  sendMessage: async (messageData) => {
    try {
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
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};