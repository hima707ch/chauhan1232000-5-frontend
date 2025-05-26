const express = require('express');
const Message = require('./messageModel');
const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message, propertyId } = req.body;
    const newMessage = new Message({ name, email, message, propertyId });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
