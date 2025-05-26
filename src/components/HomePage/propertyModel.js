const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  area: { type: Number },
  type: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Property', propertySchema);
