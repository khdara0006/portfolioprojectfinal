import { useState } from 'react';
import { api } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await api.sendMessage(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">Have a question or want to work together? Let's talk!</p>
      
      <div className="contact-wrapper">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project or opportunity..."
              />
              <small>Minimum 10 characters</small>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message"> Message sent successfully!</div>}
            
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="contact-sidebar">
          <h3>Let's Connect</h3>
          <p>Feel free to reach out through any of these platforms:</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon"></span>
              <div>
                <strong>Email</strong>
                <a href="mailto:rarasaradri@example.com">rarasaradri@example.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon"></span>
              <div>
                <strong>Phone</strong>
                <span>+855 6777777776777X</span>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon"></span>
              <div>
                <strong>GitHub</strong>
                <a href="https://github.com/rayleigh" target="_blank" rel="noopener noreferrer">github.com/rayleigh</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;