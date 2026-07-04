const Message = require('../models/Message');

// Submit contact message
const submitMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    if (message.length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters' });
    }
    
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all messages (admin only)
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  submitMessage,
  getMessages
};