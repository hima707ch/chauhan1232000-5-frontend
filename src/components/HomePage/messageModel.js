const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
